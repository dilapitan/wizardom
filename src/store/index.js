import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tags: [
      {
        id: 1,
        label: '#vue',
        backgroundColor: '#42b883',
        textColor: '#12181B',
      },
      {
        id: 2,
        label: '#node',
        backgroundColor: '#66BB6A',
        textColor: '#12181B',
      },
      {
        id: 3,
        label: '#firebase',
        backgroundColor: '#FFCB2A',
        textColor: '#12181B',
      },
      {
        id: 4,
        label: '#react',
        backgroundColor: '#00b3e6',
        textColor: '#12181B',
      },
      {
        id: 5,
        label: '#css',
        backgroundColor: '#F854BE',
        textColor: '#12181B',
      },
      {
        id: 6,
        label: '#tailwind',
        backgroundColor: '#39BDF8',
        textColor: '#12181B',
      },
      {
        id: 7,
        label: '#flexbox',
        backgroundColor: '#454E56',
        textColor: '#FFFFFF',
      },
    ],
  },
  mutations: {},
  actions: {},
})
