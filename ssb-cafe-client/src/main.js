// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'
import VueQrcodeReader from 'vue-qrcode-reader'
import App from './App'
import router from './router'

Vue.use(VueQrcodeReader)

Vue.prototype.$http = Axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
