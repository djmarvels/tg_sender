<template>
  <div class="form-card">
    <div class="card">
      <div class="card-title">Заполнение данных</div>
      <el-form :model="botForm" ref="botForm" label-position="top">
        <el-form-item label="Текст новости">
          <el-input type="textarea" v-model="botForm.text" placeholder="Введите текст" />
        </el-form-item>
        <el-form-item label="Фотография">
          <el-input type="file" name="photo_1" v-model="temp_image" @change="changeImage" ref="photo_1" v-if="botForm.image == null" />
          <el-button type="primary" @click="emptyImage" v-if="botForm.image != null">Обновить фотографию</el-button>
          <el-row v-if="botForm.image != null" :style="{ marginTop: '24px' }">
            <img :src="botForm.image" alt="" class="form-card-image">
          </el-row>
        </el-form-item>
        <el-form-item label="Ссылка">
          <el-row :gutter="20">
            <el-col :md="12" :sm="24">
              <el-input v-model="botForm.link_text" placeholder="Введите текст ссылки" />
            </el-col>
            <el-col :md="12" :sm="24">
              <el-input v-model="botForm.link_href" placeholder="Введите путь ссылки" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="button" @click="sendPost">Отправить</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
    async sendPost () {
      if (!this.botForm.text.length) {
        this.$notify.error({ title: 'Ошибка валидации', message: 'Заполните поле "Текст"' })
      } else if (!this.botForm.link_text.length) {
        this.$notify.error({ title: 'Ошибка валидации', message: 'Заполните поле "Текст ссылки"' })
      } else if (!this.botForm.link_href.length) {
        this.$notify.error({ title: 'Ошибка валидации', message: 'Заполните поле "Путь ссылки"' })
      } else if (this.botForm.image_file == null) {
        this.$notify.error({ title: 'Ошибка валидации', message: 'Загрузите фотографию для поста' })
      } else {
        try {
          const chats = await this.$axios.$get(`${window.location.origin}/api/chats`)
          for (const chat_id of chats) {
            await this.$axios.$post(`https://api.telegram.org/bot1629253964:AAG3qQ9CHoYT-uiMX75PofKH3gi7xG44kLs/sendPhoto`,  this.botForm.image_file, {
              headers: { 'Content-Type': 'multipart/form-data' },
              params: {
                chat_id: chat_id,
                caption: this.botForm.text,
                reply_markup: {
                  inline_keyboard: [[{ text: this.botForm.link_text, url: this.botForm.link_href }]]
                }
              }
            })
          }
        } catch (e) {
          if (typeof e.response !== 'undefined') {
            if (typeof e.response.description !== 'undefined' && typeof e.response.error_code !== 'undefined') {
              this.$notify.error({ title: 'Ошибка сервера', message: e.response.description })
            }
          }
        }
      }
    },
    emptyImage () {
      this.botForm.image = null
      this.temp_image = null
      this.botForm.image_file = null
    },
    async changeImage () {
      const file = this.$refs.photo_1.$refs.input.files[0]
      try {
        this.botForm.image = await this.toBase64 (file)
        const formData = new FormData()
        formData.append('photo', file)
        this.botForm.image_file = formData
      } catch (e) {
        console.log(e)
      }
    },
    toBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      })
    }
  },
  data: () => ({
    temp_image: '',
    botForm: {
      image: null,
      image_file: null,
      text: '',
      link_text: '',
      link_href: '',
    }
  })
}
</script>

<style scoped lang="scss">
.form-card {
  margin: 48px 0;
  &-image {
    width: 300px;
    height: auto;
  }
}
</style>
