import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import addAttr from './modules/addAttr'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules:{
  	addAttr
  },
  // strict: process.env.NODE_ENV !== 'production'
})