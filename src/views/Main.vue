<template>
  <v-layout class="h-100 pa-2">
    <router-view></router-view>
  </v-layout>
  <app-bottom-navigation></app-bottom-navigation>
</template>
  
  <script>
import AppBottomNavigation from '../components/app/AppBottomNavigation.vue'

export default {
  components: {
    AppBottomNavigation
  }
}
</script>
<style scoped>
</style>