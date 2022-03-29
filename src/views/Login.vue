<template>
  <v-container>
    <br />

    <h1 id="special-font" class="specialFont--text">
      <span id="jarvis-label">JARVIS:</span>
      Sir, is that you?
    </h1>

    <v-divider></v-divider>

    <br />
  </v-container>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style scoped>
#jarvis-label {
  background-image: linear-gradient(90deg, #c62828, #ffd600);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
