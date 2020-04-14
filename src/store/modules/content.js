import { } from '../mutation-types'

export default {
  state: {
    data: {
      1: [
        { date: 'Wed Apr 06 2020 00:00:00 GMT+0600', crew: '1', value: 24.4, norm: 24, goal: 25.6 },
        { date: 'Wed Apr 06 2020 12:00:00 GMT+0600', crew: '1', value: 24.4, norm: 24, goal: 25.6 },
        { date: 'Wed Apr 07 2020 00:00:00 GMT+0600', crew: '1', value: 24.4, norm: 24, goal: 25.6 },
        { date: 'Wed Apr 07 2020 12:00:00 GMT+0600', crew: '1', value: 24.4, norm: 24, goal: 25.6 },
        { date: 'Wed Apr 08 2020 00:00:00 GMT+0600', crew: '1', value: 24.4, norm: 24, goal: 25.6 },
        { date: 'Wed Apr 08 2020 12:00:00 GMT+0600', crew: '1', value: 24.4, norm: 24, goal: 25.6 },
      ]
    }
  },
  getters: {
    data: state => {
      return state.data;
    },
  },
  actions: {
  },
  mutations: {
  }
}