<template>
  <ul>
    <li v-for="post in posts" :key="post">
      Post Item - {{ post }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Posts',

  data() {
    return {
      posts: [1, 2, 3]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>