<template>
  <v-container>
    <br />

    <h1 id="special-font" class="specialFont--text">
      LIST OF
      <span class="gradient-label">#TAGS</span>
    </h1>

    <v-divider></v-divider>

    <br />

    <div>
      <TagComponent
        class="ma-1"
        v-for="(tag, i) in tags"
        :key="i"
        :value="tag.label"
      />
    </div>

    <br />
  </v-container>
</template>

<script>
import TagComponent from '@/components/TagComponent'

export default {
  name: 'Tags',

  components: {
    TagComponent,
  },

  data: () => ({
    tags: null,
  }),

  created() {
    this.tags = this.getTags()
  },

  methods: {
    getTags() {
      return this.$store.state.tags
    },
  },
}
</script>
