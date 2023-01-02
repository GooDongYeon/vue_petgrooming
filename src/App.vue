<script setup>
import Header from './components/inc/Header.vue'
import Nav from './components/inc/Nav.vue'
</script>

<template>
  <div class="all-cont">
    <Header />
    <Nav />
    <router-view :class="classContent" />
  </div>
</template>

<style scoped>

</style>
