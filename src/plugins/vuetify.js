import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#333F71',
        secondary: '#46579B',
        accent: '#D44C0C',
        error: '#C1301D',
        navs: '#FFFFFF',
        background: '#DBE1E7',
        specialFont: '#454E56',
      },
      dark: {
        primary: '#333F71',
        secondary: '#46579B',
        accent: '#D44C0C',
        error: '#C1301D',
        navs: '#2A2E34',
        background: '#12181B',
        specialFont: '#FFFFFF',
      },
    },
  },
})
