<template>
  <div class="form-card">
    <div>
      {{ botForm }}
    </div>
    <el-form :model="botForm" ref="botForm" label-position="top">
      <el-form-item>
        <el-input type="file" name="photo_1" v-model="temp_image" @change="uploadImage" ref="photo_1" v-if="botForm.image == null" />
        <img :src="botForm.image" v-if="botForm.image !== null" alt="">
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  //XEO322XV8su-xDppejbLpGi6T27ukWCO7iuPO5AR49Q
  //Bk0X4s5ZyI3riJOSts6oW2cfsgm-BmbagzX96otHqsw
  //0625061fc5d644eb9eaf16e452871a0fe6412782
  import { createClient } from 'pexels'
export default {
  name: "index",
  methods: {
    async uploadImage () {
      const file = this.$refs.photo_1.$refs.input.files[0]
      try {
        this.botForm.image = await this.toBase64 (file)
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
  mounted() {
  },
  data: () => ({
    temp_image: '',
    botForm: {
      image: null
    }
  })
}
</script>

<style scoped lang="scss">
</style>
