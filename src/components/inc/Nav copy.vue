<template>
  <nav class="cont-nav">
    <ul class="cont-ul">
      <li>
        <router-link
          class="router"
          to="/Price">
          가격표
        </router-link>
      </li>
      <li>
        <router-link
          class="router"
          to="/">
          Home
        </router-link>
      </li>
      <li>
        <router-link
          class="router"
          to="/Appointment">
          예약
        </router-link>
      </li>
      <li>
        <router-link
          class="router"
          to="/Visit">
          찾아오시는길
        </router-link>
      </li>
      <div>
        <li class="cont-login">
          로그인
        </li>
        <li class="cont-join">
          회원가입
        </li>
      </div>
    </ul>
  </nav>
</template>

<script setup>

</script>

<style scoped>
.cont-nav{
  /* background-color: black; */
  border-bottom: 1px solid lightgray;
}
.router {
  text-decoration: none;
  border-bottom: 1px solid #eee;
  /* color: white; */
}

.cont-ul {
  list-style: none;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  width: 1040px;
  height: 100px;
  margin: 0 auto;
  top: 0;
}

.cont-login {
  list-style: none;
  padding-bottom: 10px;
  text-align: center;
}

.cont-join {
  list-style: none;
  text-align: center;
}
</style>

<!-- .sidebar-menu {
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
} -->
