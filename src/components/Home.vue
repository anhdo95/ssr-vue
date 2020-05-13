<template>
  <div class="home">
    <header class="header">Header</header>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/posts">Posts</router-link>
    </nav>
    <main>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consectetur rerum nihil aut, maiores fugit ea, ad asperiores, quo earum accusamus molestias suscipit quibusdam aliquid qui eaque? Autem, neque fuga?
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.home {
  padding: 1rem 4rem;
}

.nav {
  & > * {
    display: inline-block;
    padding: 0.75rem 1.25rem;
  }
}
</style>