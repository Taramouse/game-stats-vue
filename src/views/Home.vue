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
import Profile from '@/models/Profile'

export default {
  name: 'home',
  created () {
    const profiles = [
      {
        id: 1,
        user_id: 1,
        title: 'Profile 1 title',
        description: 'First profile description',
        isLoaded: false,
        author: { id: 1, name: 'Nicky Keyse', email: 'nickykeyse@gmail.com' }
      },
      {
        id: 2,
        user_id: 1,
        title: 'Profile 2 title',
        description: 'Second profile description',
        isLoaded: false,
        author: { id: 1, name: 'Nicky Keyse', email: 'nickykeyse@gmail.com' }
      },
      {
        id: 3,
        user_id: 2,
        title: 'Profile 3 title',
        description: 'Third profile description',
        isLoaded: false,
        author: { id: 2, name: 'Nicky Keyse', email: 'nickykeyse@gmail.com' }
      }
    ]
    Profile.create({ data: profiles })
  },
  computed: {
    profiles () {
      return this.$store.getters['entities/profiles/query']().all()
      // return this.$store.getters.entities.profiles
    }
  }
}
</script>
