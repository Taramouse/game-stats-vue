<template>
  <v-container>
    <v-layout>
      <h1>{{title}}</h1>
    </v-layout>
    <v-layout>
      <h3>{{msg}}</h3>
    </v-layout>
    <v-card flat class="pa-3" v-for="project in projects" :key="project.id">
      <v-layout row wrap>
        <v-flex xs4 md4 class="info">
          <div class="title">{{project.title}}</div>
        </v-flex>
        <v-flex xs8 md6>
          <div>{{project.desc}}</div>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-card>
  </v-container>

</template>

<script>
export default {
  name: 'home',
  computed: {
    title () {
      return this.$store.getters.title
    },
    msg () {
      return this.$store.getters.msg
    },
    projects () {
      return this.$store.getters.projects
    }
  }
}
</script>
