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
