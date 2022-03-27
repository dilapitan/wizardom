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
      <v-card-title>
        <h3 id="special-font">
          {{ data.title }}
        </h3>
      </v-card-title>
      <v-card-text>
        <div>
          {{ data.description }}
        </div>

        <v-chip-group class="mt-2">
          <TagComponent v-for="tag in data.tags" :key="tag" :value="tag" />
        </v-chip-group>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
import TagComponent from '@/components/TagComponent'

export default {
  name: 'CardComponent',
  props: ['data'],
  components: {
    TagComponent,
  },
}
</script>