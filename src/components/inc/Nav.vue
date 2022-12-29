<template>
  <nav class="cont-nav">
    <ul class="cont-ul">
      <li><router-link class="router" to="/Price">가격표</router-link></li>
      <li><router-link class="router" to="/">Home</router-link></li>
      <li><router-link class="router" to="/Appointment">예약</router-link></li>
      <li><router-link class="router" to="/Visit">찾아오시는길</router-link></li>
      <div>
        <li class="cont-join">로그인</li>
        <li class="cont-user">회원가입</li>
      </div>
    </ul>
  </nav>
</template>

<script setup>

</script>

<style scoped>
.router {
  text-decoration: none;
  color: white;
}
.cont-nav{
  background-color: black;
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

.cont-join {
  list-style: none;
  display: flex;
  padding-right: 20px;
  margin-bottom: 20px;
  color: #eee;
  text-align: center;
}

.cont-user {
  list-style: none;
  display: flex;
  color: #eee;
  text-align: center;
}
</style>