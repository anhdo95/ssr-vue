<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'

export default {
  name: 'App',
  
  components: {
    Posts,
  },
}
</script>

<style lang="scss" scoped>

</style>