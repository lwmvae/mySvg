import * as types from '../mutation-types'

let state = {
  showPopup:false,
  clickId:null,
  valueShow: {}
}

const getters = {
  showPopup(state) {
    return state.showPopup
  },
  clickId(state){
    return state.clickId
  },
  valueShow(state) {
    return state.valueShow
  }
}


const mutations = {
  [types.SET_SHOW_POPUP](state, showPopup) {
    state.showPopup = showPopup
  },
  [types.SET_CLICK_ID](state, clickId) {
    state.clickId = clickId
  },
  [types.SET_VALUE_SHOW](state, valueShow) {
    state.valueShow = valueShow
  }
}

export default {
  state,
  getters,
  mutations
}