<template>
  <v-layout>
    <h1>{{title}}</h1>
    <h3>{{msg}}</h3>
  </v-layout>
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
    }
  }
}
</script>
