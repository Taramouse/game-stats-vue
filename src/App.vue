<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>Game Stats</span>
        <span class="font-weight-light"> - Save your game statistics</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/">
        <span class="mr-2">Profiles</span>
      </v-btn>
      <v-btn flat to="/about">
        <span class="mr-2">Stats</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
