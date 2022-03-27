import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#46579B',
        secondary: '#333F71',
        accent: '#D44C0C',
        error: '#C1301D',
        navs: '#FFFFFF',
        background: '#DBE1E7',
        specialFont: '#454E56',
      },
      dark: {
        primary: '#46579B',
        secondary: '#333F71',
        accent: '#D44C0C',
        error: '#C1301D',
        navs: '#2A2E34',
        background: '#12181B',
        specialFont: '#FFFFFF',
      },
    },
  },
})
