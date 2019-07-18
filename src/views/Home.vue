<template>
  <v-container>
    <v-card hover class="ma-3 pa-2" v-for="profile in profiles" :key="profile.id">
      <v-layout row wrap class="info">
        <v-flex xs12 class="pa-3">
          <div class="display-3">{{profile.title}}</div>
        </v-flex>
        <v-flex xs12 class="pa-3">
          <div class="display-2">{{profile.description}}</div>
        </v-flex>
        <v-flex class="pa-3 text-xs-center" v-for="column in profile.columns" :key="column.value">
          <div class="body-1">{{column.title}}</div>
          <v-flex class="pa-3" v-for="item in profile.items" :key="item.id">
            <div class="body-1">{{item[column.value]}}</div>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>

</template>

<script>

export default {
  name: 'home',
  computed: {
    profiles () {
      return this.$store.getters.profiles
    }
  }
}
</script>
