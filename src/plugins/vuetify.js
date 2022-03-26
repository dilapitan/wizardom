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
        background: '#FFFFFF',
      },
      dark: {
        primary: '#333F71',
        secondary: '#46579B',
        accent: '#D44C0C',
        error: '#C1301D',
        background: '#12181B',
      },
    },
  },
})
