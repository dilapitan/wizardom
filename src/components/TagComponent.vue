<template>
  <v-chip
    :color="backgroundColor"
    :text-color="textColor"
    class="font-weight-medium"
  >
    {{ style(value) }}
  </v-chip>
</template>

<script>
export default {
  name: 'TagComponent',

  props: ['value'],

  data: () => ({
    backgroundColor: null,
    textColor: null,
    tags: null,
  }),

  created() {
    this.getTags()
  },

  methods: {
    getTags() {
      this.tags = [
        {
          id: 1,
          label: '#vue',
          backgroundColor: '#42b883',
          textColor: '#12181B',
        },
        {
          id: 2,
          label: '#node',
          backgroundColor: '#66BB6A',
          textColor: '#12181B',
        },
        {
          id: 3,
          label: '#firebase',
          backgroundColor: '#FFCB2A',
          textColor: '#12181B',
        },
        {
          id: 4,
          label: '#react',
          backgroundColor: '#00b3e6',
          textColor: '#12181B',
        },
        {
          id: 5,
          label: '#css',
          backgroundColor: '#F854BE',
          textColor: '#12181B',
        },
        {
          id: 6,
          label: '#tailwind',
          backgroundColor: '#39BDF8',
          textColor: '#12181B',
        },
        {
          id: 7,
          label: '#flexbox',
          backgroundColor: '#454E56',
          textColor: '#FFFFFF',
        },
      ]
    },

    style(value) {
      // TODO: Get Database here for Tags in Firebase and to be stored in Store

      const data = this.tags.filter((tag) => value === tag.label)
      const { backgroundColor, textColor } = data[0]

      this.backgroundColor = backgroundColor
      this.textColor = textColor
      return value
    },
  },
}
</script>