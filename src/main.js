import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './assets/css/global.css'
import store from './store'
import * as snackbar from '@/utils/snackbar'

Vue.prototype.$snackbar = snackbar
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
