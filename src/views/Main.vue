<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <bottom-navigation></bottom-navigation>
  </v-app>
</template>
  
  <script>
import BottomNavigation from '../components/BottomNavigation.vue'

export default {
  components: {
    BottomNavigation
  }
}
</script>