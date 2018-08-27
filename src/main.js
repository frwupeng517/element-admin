// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import i18n from './i18n/i18n'
// import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import '../static/font/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(ElementUI)

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
