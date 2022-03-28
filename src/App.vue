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
              <span id="special-font" class="text-h6 specialFont--text">
                PROJECTS
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/study">
          <v-icon class="mr-2">mdi-book-open-variant</v-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span id="special-font" class="text-h6 specialFont--text">
                STUDY
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/tags">
          <v-icon class="mr-2">mdi-tag-multiple</v-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span id="special-font" class="text-h6 specialFont--text">
                TAGS
              </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="talk-to-jarvis">
          <v-icon class="mr-2">mdi-pyramid</v-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span id="special-font" class="text-h6 specialFont--text">
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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>

      <v-toolbar-title>
        <h2 id="special-font" class="primary--text">Wizardom</h2>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-dialog
        v-model="searchDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon color="primary" x-large v-bind="attrs" v-on="on">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>

        <v-card>
          <br /><br />
          <v-container>
            <v-row>
              <v-col cols="9" sm="8">
                <v-text-field
                  v-model="searchInput"
                  hide-details
                  label="Search"
                  placeholder="Search"
                  filled
                  rounded
                  dense
                  single-line
                  append-icon="mdi-magnify"
                  class="mx-4"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-btn
                  v-if="$vuetify.breakpoint.smAndUp"
                  @click="searchDialog = false"
                  text
                >
                  CANCEL
                </v-btn>
                <v-btn
                  @click="searchDialog = false"
                  v-else
                  icon
                  color="primary"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>

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
    drawer: null,
    dialog: false,
    searchDialog: false,
    searchInput: null,
  }),

  created() {
    const theme = localStorage.getItem('dark_theme')
    this.$vuetify.theme.dark = theme === 'true' ? true : false

    // Set the drawer Opened for Large screens immediately, Closed for medium and below.
    if (this.$vuetify.breakpoint.lgAndUp) this.drawer = true
    else this.drawer = false
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString())
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

#special-font {
  font-family: 'Bungee' !important;
}

.gradient-label {
  background-image: linear-gradient(90deg, #5e35b1, #01579b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
