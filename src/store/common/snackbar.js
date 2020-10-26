const snackbar = {
  state: {
    snackbar: { // 全局消息条
      show: false,
      color: 'primary',
      text: '消息内容',
      icon: 'fa fa-check-circle-o',
      timeout: 6000
    }
  },
  mutations: {
    SHOW_SNACKBAR (state, obj) {
      state.snackbar = obj
    },
    HIDE_SNACKBAR (state) {
      state.snackbar.show = false
    }
  },
  actions: {
    async showSnackbar ({ commit }, obj) {
      commit('SHOW_SNACKBAR', obj)
    },
    async hideSnackbar ({ commit }) {
      commit('HIDE_SNACKBAR')
    },
    async success ({ commit }, obj) {
      obj.show = true
      obj.icon = 'fa fa-check-circle-o'
      obj.color = '#19CAAD'
      commit('SHOW_SNACKBAR', obj)
    },
    async warning ({ commit }, obj) {
      obj.show = true
      obj.icon = 'fa fa-minus-circle'
      obj.color = 'warning'
      commit('SHOW_SNACKBAR', obj)
    },
    async error ({ commit }, obj) {
      obj.show = true
      obj.icon = 'fa fa-minus-circle'
      obj.color = 'red'
      commit('SHOW_SNACKBAR', obj)
    }
  },
  namespaced: true
}

export default snackbar
