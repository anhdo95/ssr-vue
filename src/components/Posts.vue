<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Posts',

  data() {
    return {
    }
  },

  computed: {
    ...mapState({
      posts: state => state.posts,
    })
  },

  serverPrefetch() {
    return this.fetchPosts()
  },

  methods: {
    ...mapActions({
      fetchPosts: 'fetchPosts'
    })
  },
}
</script>

<style lang="scss" scoped>

</style>