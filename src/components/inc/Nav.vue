<template>
  <nav class="sidebar">
    <div class="sidebar-inner">
      <header class="sidebar-header">
        <button
          type="button"
          class="sidebar-btn"
          @click="toggleSidebar()">
          <i class="fa-solid fa-bars"></i>
        </button>
        <img
          src="../img/logo.jpg"
          alt=""
          class="sidebar-logo" />
      </header>

      <nav class="sidebar-menu">
        <button type="button">
          <i class="fa-solid fa-house"></i>
          <router-link
            to="/"
            class="routerlink">
            Home
          </router-link>
        </button>
        <button type="button">
          <i class="fa-solid fa-user"></i>
          <router-link
            to="/Price"
            class="routerlink">
            Price
          </router-link>
        </button>
        <button
          type="button"
          class="has-border">
          <i class="fa-solid fa-gear"></i>
          <router-link
            to="/Visit"
            class="routerlink">
            Visit
          </router-link>
        </button>
      </nav>
    </div>
  </nav>
</template>

<script setup>
const toggleSidebar = () => {
  document.body.classList.toggle('open')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,300&display=swap');
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: black ;
}

button {
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.sidebar {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 75px;
  height: 100%;
  background: #3949ab;
  transition: all 0.4s;
}

body.open .sidebar {
  width: 240px;
}

.sidebar-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  height: 68px;
  padding: 0 1.25rem 0 0;
  background: rgba(0 0 0 0.1);
  border-left: 3px solid transparent;
  transition: all 0.4s;
}

.sidebar-header:hover {
  border-left: 3px solid #bdbdbd;
}

.sidebar-btn {
  width: 70px;
  height: 70px;
  display: grid;
  place-items: center;
}

.sidebar-btn > i, body.open .sidebar-btn > i {
  font-size: 25px;
  color: #f9f9f9;
  transition: all 0.4s;
}
.sidebar-btn:hover > i, body.open .sidebar-btn:hover > i {
  color: #bdbdbd;
}

.sidebar-logo {
  width: 130px;
  height: 70px;
  opacity: 0;
  transition: all 0.4s;
}
body.open .sidebar-logo {
  opacity: 1;
  transition: all 0.4s;
}

.sidebar-menu {
  display: grid;
}
.sidebar-menu > button {
  display: flex;
  gap: 12px;
  align-items: center;
  height: 55px;
  font-family: "Unbuntu";
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1;
  padding: 0 22px;
  border-left: 3px solid transparent;
  transition: all 0.4s;
}
.sidebar-menu > button:hover {
  border-left: 3px solid #f9f9f9;
}

.sidebar-menu > button.has-border {
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 1rem;
}

.sidebar-menu > button > i {
  font-size: 25px;
  color: #f9f9f9;
  transition: all 0.4s;
}

.sidebar-menu > button:hover > i, .sidebar-menu > button:hover > .routerlink {
  color: #bdbdbd;
}
.sidebar-menu > button > .routerlink {
  color: #f9f9f9;
  opacity: 0;
  transition: all 0.4s;
}

body.open .sidebar-menu > button > .routerlink {
  opacity: 1;
  transition: all 0.4s;
}

.routerlink {
  text-decoration: none;
}
</style>
