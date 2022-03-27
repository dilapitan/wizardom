<template>
  <v-container>
    <br />

    <h1 id="special-font" class="specialFont--text">LIST OF PROJECTS</h1>

    <v-divider></v-divider>

    <br />

    <v-row>
      <v-col sm="7" md="9"></v-col>
      <v-col cols="9" sm="5" md="3">
        <v-select
          :items="items"
          label="Sort By"
          filled
          rounded
          dense
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    items: ['Date Added (oldest)', 'Date Added (newest)'],
  }),
}
</script>
