exports.ids = [1];
exports.modules = {

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5dbaefa1", content, true, context)
};

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3571834_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3571834_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3571834_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3571834_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a3571834_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".form-card[data-v-a3571834]{margin:48px 0}.form-card-image[data-v-a3571834]{width:300px;height:auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=a3571834&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-card"},[_vm._ssrNode("<div class=\"card\" data-v-a3571834>","</div>",[_vm._ssrNode("<div class=\"card-title\" data-v-a3571834>Заполнение данных</div> "),_c('el-form',{ref:"botForm",attrs:{"model":_vm.botForm,"label-position":"top"}},[_c('el-form-item',{attrs:{"label":"Текст новости"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"Введите текст"},model:{value:(_vm.botForm.text),callback:function ($$v) {_vm.$set(_vm.botForm, "text", $$v)},expression:"botForm.text"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"Фотография"}},[(_vm.botForm.image == null)?_c('el-input',{ref:"photo_1",attrs:{"type":"file","name":"photo_1"},on:{"change":_vm.changeImage},model:{value:(_vm.temp_image),callback:function ($$v) {_vm.temp_image=$$v},expression:"temp_image"}}):_vm._e(),_vm._v(" "),(_vm.botForm.image != null)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.emptyImage}},[_vm._v("Обновить фотографию")]):_vm._e(),_vm._v(" "),(_vm.botForm.image != null)?_c('el-row',{style:({ marginTop: '24px' })},[_c('img',{staticClass:"form-card-image",attrs:{"src":_vm.botForm.image,"alt":""}})]):_vm._e()],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"Ссылка"}},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"md":12,"sm":24}},[_c('el-input',{attrs:{"placeholder":"Введите текст ссылки"},model:{value:(_vm.botForm.link_text),callback:function ($$v) {_vm.$set(_vm.botForm, "link_text", $$v)},expression:"botForm.link_text"}})],1),_vm._v(" "),_c('el-col',{attrs:{"md":12,"sm":24}},[_c('el-input',{attrs:{"placeholder":"Введите путь ссылки"},model:{value:(_vm.botForm.link_href),callback:function ($$v) {_vm.$set(_vm.botForm, "link_href", $$v)},expression:"botForm.link_href"}})],1)],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary","native-type":"button"},on:{"click":_vm.sendPost}},[_vm._v("Отправить")])],1)],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=a3571834&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "index",
  methods: {
    async sendPost() {
      try {
        await this.uploadImage();
        await this.$axios.$post(`${window.location.origin}/api/send`, {
          text: this.botForm.text,
          link_text: this.botForm.link_text,
          link_href: this.botForm.link_href
        });
        this.$notify.success({
          title: 'Успешно',
          message: 'Пост опубликован'
        });
      } catch (e) {
        if (e.response.status === 400) {
          this.$notify.error({
            title: 'Ошибка запроса',
            message: e.response.data.message
          });
        } else if (e.response.status === 422) {
          this.$notify.error({
            title: 'Ошибка валидации',
            message: e.response.data.message
          });
        }
      }
    },

    async uploadImage() {
      if (this.botForm.image_file !== null) {
        try {
          const chats = await this.$axios.$get(`${window.location.origin}/api/chats`);

          for (const chat_id of chats) {
            await this.$axios.$post(`https://api.telegram.org/bot1629253964:AAG3qQ9CHoYT-uiMX75PofKH3gi7xG44kLs/sendPhoto?chat_id=${chat_id}`, this.botForm.image_file, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    },

    emptyImage() {
      this.botForm.image = null;
      this.temp_image = null;
      this.botForm.image_file = null;
    },

    async changeImage() {
      const file = this.$refs.photo_1.$refs.input.files[0];

      try {
        this.botForm.image = await this.toBase64(file);
        const formData = new FormData();
        formData.append('photo', file);
        this.botForm.image_file = formData;
      } catch (e) {
        console.log(e);
      }
    },

    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = error => reject(error);
      });
    }

  },
  data: () => ({
    temp_image: '',
    botForm: {
      image: null,
      image_file: null,
      text: '',
      link_text: '',
      link_href: ''
    }
  })
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(195)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a3571834",
  "a7068504"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map