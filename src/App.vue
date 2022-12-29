<script setup>
import Nav from './components/inc/Nav.vue'
// import Footer from './components/inc/Footer.vue'
</script>

<template>
  <div class="all-cont">
    <Nav />
    <router-view :class="classContent"></router-view>
    <!-- <Footer /> -->
  </div>
</template>

<style scoped>

</style>
