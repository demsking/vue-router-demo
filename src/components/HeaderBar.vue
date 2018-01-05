<template>
  <div>
    <router-link :to="{ name: 'login' }" tag="button">Login</router-link>
    <router-link :to="{ name: 'overview' }" tag="button">Overview</router-link>
    <router-link :to="{ name: 'stats' }" tag="button">Stats</router-link>
    <h1>{{ $route.meta.title }}</h1>
    <small>{{ tree }}</small>
  </div>
</template>

<script>
  export default {
    computed: {
      titles () {
        return this.$route.matched.map((route) => route.meta.title)
      },
      tree () {
        return this.titles.filter((title) => title).join(' > ')
      }
    }
  }
</script>

<style scoped>
  div {
    padding: 10px;
    background-color: #eff0f1
  }
</style>
