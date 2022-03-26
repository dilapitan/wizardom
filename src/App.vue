<template>
  <v-app>
    <v-app-bar app>
      <h2>Wizardom</h2>
      <v-spacer></v-spacer>
      <v-btn icon color="primary" x-large>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn @click="toggleTheme()" icon color="accent" x-large>
        <v-icon v-if="!$vuetify.theme.dark">mdi-fire-off</v-icon>
        <v-icon v-else>mdi-fire</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),

  created() {
    const theme = localStorage.getItem('dark_theme')
    this.$vuetify.theme.dark = theme === 'true' ? true : false
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString())
    },
  },
}
</script>
