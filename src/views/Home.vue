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

    <v-row>
      <v-col cols="12" sm="6" v-for="project in projects" :key="project.id">
        <v-container>
          <CardComponent :data="project" />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardComponent from '@/components/CardComponent'

export default {
  name: 'Home',

  components: {
    CardComponent,
  },

  data: () => ({
    items: ['Date Added (oldest)', 'Date Added (newest)'],
    projects: [
      {
        id: 1,
        src: 'https://picsum.photos/id/20/500/300',
        title: 'Project 1',
        description: 'This is Project 1',
        tags: ['#vue', '#firebase'],
      },
      {
        id: 2,
        src: 'https://picsum.photos/id/12/500/300',
        title: 'Project 2',
        description: 'This is Project 2',
        tags: ['#vue', '#firebase'],
      },
      {
        id: 3,
        src: 'https://picsum.photos/id/35/500/300',
        title: 'Project 3',
        description: 'This is Project 3',
        tags: ['#css', '#flexbox'],
      },
      {
        id: 4,
        src: 'https://picsum.photos/id/43/500/300',
        title: 'Project 4',
        description: 'This is Project 4',
        tags: ['#react', '#firebase'],
      },
      {
        id: 5,
        src: 'https://picsum.photos/id/75/500/300',
        title: 'Project 5',
        description: 'This is Project 5',
        tags: ['#vue', '#node'],
      },
      {
        id: 6,
        src: 'https://picsum.photos/id/100/500/300',
        title: 'Project 6',
        description: 'This is Project 6',
        tags: ['#react', '#node'],
      },
    ],
  }),
}
</script>
