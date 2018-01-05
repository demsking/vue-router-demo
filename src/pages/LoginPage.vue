<template>
  <form>
    <input type="email" placeholder="Username">
    <input type="password" placeholder="Password">
    <router-link :to="{ name: 'overview' }" tag="button">Sign In</router-link>
  </form>
</template>

<style scoped>
  form {
    width: 300px;
    padding: 30px;
    text-align: center;
    border-radius: 15px;
    background: #eff0f1;
    margin: 10% auto 0
  }

  button {
    text-align: center;
    display: block;
    margin: auto
  }
</style>
