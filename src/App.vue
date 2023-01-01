<script setup>
import Nav from './components/inc/Nav.vue'
</script>

<template>
  <div class="all-cont">
    <Nav />
    <router-view :class="classContent" />
  </div>
</template>

<style scoped>

</style>
