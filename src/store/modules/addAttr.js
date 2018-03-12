import * as types from '../mutation-types'

let state = {
  valueShow: [{
    name: '123',
    type: '456'
  }]
}

const getters = {
  valueShow(state) {
    return state.valueShow
  }
}


const mutations = {
  [types.SET_VALUE_SHOW](state, valueShow) {
    state.valueShow = valueShow
  }
}

export default {
  state,
  getters,
  mutations
}