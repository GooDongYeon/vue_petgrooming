<!-- login page -->
<template>
  <main>
    <h2><strong>로그인 또는 회원가입</strong></h2>
    <hr />
    <form>
      <Input
        id="id"
        type="email"
        placeholder=" 아이디"
        required /><br />
      <Input
        id="pw"
        type="password"
        placeholder="비밀번호"
        required /><br />
      <p class="keep">
        로그인 상태 유지
      </p>
      <button
        id="login"
        required
        @click.prevent="login">
        로그인
      </button><br />
      <a class="join">회원가입</a><a class="find">아이디/비밀번호 찾기</a>
    </form>
    <hr /><div class="or">
      또는
    </div>
    <section>
      <button id="google">
        <img
          src="loginpage/Google.png"
          alt="" />구글 계정으로 로그인
      </button><br />
      <button id="facebook">
        <img
          src="loginpage/facebook.png"
          alt="" />페이스북 계정으로 로그인
      </button><br />
      <button id="naver">
        <img
          src="loginpage/naver.png"
          alt="" />네이버 계정으로 로그인
      </button><br />
      <button id="kakao">
        <img
          src="loginpage/kakao.png"
          alt="" />카카오톡 계정으로 로그인
      </button>
    </section>
  </main>
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
        main {
            position: relative;
            border: 1px solid #767676;
            width: 530px;
            height: 750px;
            text-align: center;
            left: 35%;
        }
        h2 {
            font-weight: 500;
            font-size: 16px;
            Line-height: 20.03px;
            margin-top: 20px;
            margin-bottom: 18px;
        }

        h2::after {
            display: inline-block;
            content: "";
            background-image: url("loginpage/close.png");
            width: 16px;
            height: 16px;
            position: relative;
            left: 148px;
            cursor: pointer;
        }
        
        h1 {
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            margin-top: 26px;
            position: relative;
            right: 32px;
            margin-bottom: 24px;
        }

        p {
            color: #767676;
        }
        input {
            width: 450px;
            height: 44px;
            margin-top: 10px;
            padding: 15px auto;
            padding-left: 16px;
        }

        .keep {
            position: relative;
            right: 155px;
        }

        .keep::before {
            display: inline-block;
            content: "";
            width: 22px;
            height: 22px;
            position: relative;
            top: 5px;
            right: 8px;
            background-image: url("loginpage/check-box.png");
            cursor: pointer;
        }

        #login {
            width: 472px;
            height: 50px;
            border: none;
            border-radius: 5px;
            color: white;
            font-weight: 700;
            font-size: 18px;
            background-color: #2f80ed;
            cursor: pointer;
            margin-bottom: 20px;
        }

        section #google, #facebook, #naver, #kakao{
            width: 472px;
            height: 50px;
            margin-bottom: 10px;
            cursor: pointer;
            background-color: white;
            font-weight: 500;
            line-height: 20.03px;
            border-radius: 5px;
            padding-top: 13px;
        }

        #google {
            border: 1px solid #767676;
            margin-top: 29px;
        }
        #facebook {
            border: 1px solid #2d9cdb;
        }
        #naver {
            border: 1px solid #00bf18;
        }
        #kakao {
            border: 1px solid #f2c94c;
        }

        button img {
            float: left;
            position: relative;
            left: 15px;
            bottom: 7px;
        }

        .or {
            position: relative;
            border: 1px none;
            width: 64px;
            height: 18px;
            background-color: white;
            color: #767676;
            bottom: 20px;
            left: 230px;
        }

        .join {
            border-right: 1px solid #767676;
            padding-right: 12px;
        }

        .find {
            padding-left: 12px;
        }

        a {
            cursor: pointer;
            display: inline-block;
            margin-bottom: 38px;
            color: #767676
        }

</style>
