<template>
  <v-app>
    <v-navigation-drawer
      color="navs"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <br /><br />
      <v-list>
        <v-list-item to="/">
          <v-icon class="mr-2">mdi-flask</v-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span id="special-button" class="text-h6 specialFont--text">
                PROJECTS
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/study">
          <v-icon class="mr-2">mdi-book-open-variant</v-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span id="special-button" class="text-h6 specialFont--text">
                STUDY
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/tags">
          <v-icon class="mr-2">mdi-tag-multiple</v-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span id="special-button" class="text-h6 specialFont--text">
                TAGS
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="talk-to-jarvis">
          <v-icon class="mr-2">mdi-pyramid</v-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span id="special-button" class="text-h6 specialFont--text">
                TALK TO JARVIS
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="navs"
      elevation="1"
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon>mdi-wizard-hat</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <h2>WIZARDOM</h2>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon color="primary" x-large>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn @click="toggleTheme()" icon color="accent" x-large>
        <v-icon v-if="!$vuetify.theme.dark">mdi-fire-off</v-icon>
        <v-icon v-else>mdi-fire</v-icon>
      </v-btn>
    </v-app-bar>

    <v-card color="background" flat height="100%">
      <v-main>
        <router-view />
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: true,
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

#special-button {
  font-family: 'Bungee' !important;
}
</style>
