<template>
  <v-bottom-navigation v-model="selectedItem" color="primary" grow>
    <v-btn style="max-width: none" v-for="(item, i) in items" :key="i" :to="item.to" exact>
      <v-icon>{{ item.icon }}</v-icon>
      <span>{{ item.text }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>
  
<script>
export default {
  data() {
    return {
      selectedItem: null,
      items: [
        { icon: 'mdi-home', text: 'Home', to: '/home' },
        { icon: 'mdi-help', text: 'Add Question', to: '/addquestion' }
      ]
    }
  }
}
</script>
