<template>
  <div class="top-bar">
    <i class="fa-solid fa-hand-middle-finger fa-2x"></i>
    <button type="button">
      <router-link
        to="/Login"
        class="routerlink">
        <i
          id="user"
          class="fa-regular fa-circle-user fa-2x"></i>
      </router-link>
    </button>
    <button type="button">
      <i
        id="bell"
        class="fa-regular fa-bell fa-2x"></i>
    </button>
  </div>
</template>

<script setup>

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,300&display=swap');

* {
  box-sizing: border-box;
}

/* initialization css */
button {
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
}

button {
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
}

/* top-bar css */
.top-bar {
  padding-left: 70px;
}

.top-bar>button {
  float: right;
  justify-content: space-between;
}

button #user {
  float: right;
  padding-right: 15px;
  text-decoration: none;
  color: black;
}

button #bell {
  float: right;
  padding-right: 20px;
  text-decoration: none;
  color: black;
}
</style>
