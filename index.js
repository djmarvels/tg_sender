const express = require ('express')
const { loadNuxt } = require('nuxt')
const port = 5000
const frontendApp = express ()
async function start() {
    const nuxt = await loadNuxt('start')
    frontendApp.use(nuxt.render)
    frontendApp.listen(port, '0.0.0.0')
    console.log('Frontend App start at http://`localhost:' + port + '`.')
}

start()
