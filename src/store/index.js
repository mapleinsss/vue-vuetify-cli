import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import snackbar from './common/snackbar'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    snackbar
  },
  getters
})

export default store
