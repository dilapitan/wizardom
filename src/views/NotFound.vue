<template>
  <v-container>
    <br />
    <h1 id="special-font">
      <span class="error--text">ERROR 404.</span>
      Page not found.
    </h1>

    <v-divider></v-divider>
    <br />

    <v-btn color="primary" to="/" x-large> Go Home </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>