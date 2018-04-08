import * as types from '../mutation-types'

let state = {
  showPopup:true,
}

const getters = {
  showPopup(state) {
    return state.showPopup
  }
}


const mutations = {
  [types.SET_SHOW_POPUP](state, showPopup) {
    state.showPopup = showPopup
  }
}

export default {
  state,
  getters,
  mutations
}