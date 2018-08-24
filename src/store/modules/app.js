import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: ! + Cookies.get('sidebarStatus')
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if(state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else{
        Cookies.set('sidebarStatus', 0)
      }
    }
  },
  actions: {
    toggleSidebar({commit}) {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default app