<template>
  <v-container>
    <br />

    <h1 id="special-font" class="specialFont--text">LIST OF STUDY</h1>

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
      <v-col cols="12" sm="6" v-for="study in studies" :key="study.id">
        <v-container>
          <CardComponent :data="study" />
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
    studies: [
      {
        id: 1,
        src: 'https://picsum.photos/id/10/500/300',
        title: 'Study 1',
        description: 'This is Study 1',
        tags: ['#vue', '#firebase'],
      },
      {
        id: 2,
        src: 'https://picsum.photos/id/11/500/300',
        title: 'Study 2',
        description: 'This is Study 2',
        tags: ['#vue', '#firebase'],
      },
      {
        id: 3,
        src: 'https://picsum.photos/id/12/500/300',
        title: 'Study 3',
        description: 'This is Study 3',
        tags: ['#css', '#flexbox'],
      },
      {
        id: 4,
        src: 'https://picsum.photos/id/13/500/300',
        title: 'Study 4',
        description: 'This is Study 4',
        tags: ['#react', '#firebase'],
      },
      {
        id: 5,
        src: 'https://picsum.photos/id/14/500/300',
        title: 'Study 5',
        description: 'This is Study 5',
        tags: ['#vue', '#node'],
      },
      {
        id: 6,
        src: 'https://picsum.photos/id/15/500/300',
        title: 'Study 6',
        description: 'This is Study 6',
        tags: ['#react', '#node'],
      },
    ],
  }),
}
</script>
