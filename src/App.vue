<template>
  <v-app>
    <v-app-bar app>
      <h2>Wizardom</h2>
      <v-spacer></v-spacer>
      <v-btn icon color="primary" x-large>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn @click="toggleTheme()" icon color="primary" x-large>
        <v-icon>mdi-fire-off</v-icon>
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

  methods: {
    toggleTheme() {
      console.log('hello')
    },
  },
}
</script>
