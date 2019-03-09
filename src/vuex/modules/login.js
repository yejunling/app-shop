import Util from '../../util/common'
import * as types from '../types'
const state = {
  token:0,
  userName:'',
}

const mutations = {
  [types.CHANGE_TOKEN] (state,res) {
    state.token = res
  },
  [types.SET_USER] (state,res) {
    state.userName = res
  },
}


export default {
  state,
  mutations
}
