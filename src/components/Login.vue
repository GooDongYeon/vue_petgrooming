<!-- login page -->
<template>
  <section class="signin">
    <div class="signin_card">
      <form
        ref="frm"
        action="/"
        metgod="get"
        class="frm">
        <input
          id="id"
          ref="id"
          type="text"
          name="id"
          placeholder="아이디를 입력하세요." />
        <input
          id="pass"
          ref="pass"
          type="password"
          name="pass"
          placeholder="비밀번호를 입력하세요." />
        <button
          ref="btn-login"
          type="submit"
          class="btn"
          @click.prevent="login">
          로그인
        </button>
      </form>
      <div class="actions">
        <a href="http://localhost:8080/?#/join">회원가입</a>
        <a href="#">아이디 찾기</a>
        <a href="#">비밀번호 찾기</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const frm = ref(null)
const id = ref(null)
const pass = ref(null)


// validation
function login() {
  if (id.value.value == '') {
    alert('아이디을 입력하세요')
    id.value.focus()
    frm.value.submit()
  } else if (pass.value.value == '') {
    alert('비밀번호를 입력하세요')
    pass.value.focus()
  }
  frm.value.submit()
}
</script>

<style scoped>
.signin {
  margin-top: 5px;
  padding: 20px 0 30px;
}

.signin_card {
  width: 500px;
  margin: 0 auto;
  border-radius: 6px;
  background-color: white;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  color: #555;
}

.signin_card form {
  padding: 30px 22px;
}

.signin_card form input {
  width: 100%;
  margin-bottom: 12px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  font-size: 14px;
}

.signin_card form button {
  width: 100%;
  margin-bottom: 12px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  font-size: 14px;
}

.signin_card .actions {
  display: flex;
  border-top: 1px solid #ddd;
}

.signin_card .actions a {
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
  padding: 20px;
  color: #555;
  font-size: 14px;
  border-right: 1px solid #ddd;
  text-decoration: none;
}

.signin_card .actions a:hover {
  background-color: black;
  color: white;
}

.signin_card .actions a:last-child {
  border-right: none;
}
</style>
