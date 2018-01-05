<template>
  <div>
    <header-bar/>
    <div class="content">
      <router-view/>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
  import HeaderBar from '@/components/HeaderBar.vue'
  import FooterBar from '@/components/FooterBar.vue'

  export default {
    components: { HeaderBar, FooterBar }
  }
</script>

<style scoped>
  .content {
    padding: 10px;
    min-height: 500px;
  }
</style>
