<template>
  <v-card hover>
    <v-img
      :src="data.src"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="250px"
    >
    </v-img>

    <v-container>
      <v-card-title>{{ data.title }}</v-card-title>
      <v-card-text>
        <div>
          {{ data.description }}
        </div>

        <v-chip-group class="mt-2">
          <v-chip v-for="tag in data.tags" :key="tag">
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['data'],
}
</script>