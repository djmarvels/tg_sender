const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const formData = require('express-form-data')
const { Telegraf } = require('telegraf')

const bot = new Telegraf ('1629253964:AAG3qQ9CHoYT-uiMX75PofKH3gi7xG44kLs');
bot.start((ctx) => {
    const chats = require('./chats.json')
    if (chats.indexOf(ctx.update.message.chat.id) === -1) {
        chats.push(ctx.update.message.chat.id)
        console.log('writefilesync')
        fs.writeFileSync(path.resolve(__dirname, 'chats.json'), JSON.stringify(chats));
    }
})
bot.startPolling()

const app = express()
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next();
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(formData.parse())

app.get('/', (req, res) => {
    res.send('API Nuxt.JS')
})

app.get('/chats', (req, res) => {
    const chats = require('./chats.json')
    res.status(200).json(chats)
})

app.post('/send',  async (req, res) => {
    let validFields = [
        { value: 'link_text', label: 'Текст ссылки' },
        {value: 'link_href', label: 'Путь ссылки' },
        {value: 'text', label: 'Текст новости' }
    ], validation = true
    for (const field of validFields) {
        if (typeof req.body[field.value] === 'undefined') {
            res.status(422).json({
                message: `Заполните "${field.label}"`
            })
            validation = false
            break;
        } else if (req.body[field.value].length === 0) {
            res.status(422).json({
                message: `Заполните "${field.label}"`
            })
            validation = false
            break;
        }
    }

    if (validation) {
        const chats = require('./chats.json')
        try {
            for (const chat_id of chats) {
                await bot.telegram.sendMessage(chat_id, req.body.text, {
                    reply_markup: {
                        inline_keyboard: [[{ text: req.body.link_text, url: req.body.link_href }]]
                    }
                })
            }
            res.status(200).json ({ send: true })
        } catch (e) {
            if (typeof e.response !== 'undefined') {
                if (typeof e.response.description !== 'undefined' && typeof e.response.error_code !== 'undefined') {
                    res.status(e.response.error_code).json ({ message: e.response.description })
                }
            }
        }

    }
})

module.exports = app
