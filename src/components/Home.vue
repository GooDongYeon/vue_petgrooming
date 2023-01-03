<script setup>
import Header from './inc/Header.vue'
import Nav from './inc/Nav.vue'
</script>

<template>
  <Header />
  <Nav />
  <div id="wrap">
    <div class="content"></div>
    <footer id="footer"></footer>
  </div>
</template>

<style scoped>
  #wrap {display:flex; min-height:100vh; flex-direction:column;}
  .content {flex:1;}
</style>
