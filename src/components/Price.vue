<script setup>
import Header from './inc/Header.vue'
import Nav from './inc/Nav.vue'
</script>

<template>
  <Header />
  <Nav />
  <div class="sider"></div>
  <div class="container">
    <div class="inner-img">
      <img
        src="./img/소형-비숑.png  "
        alt=""
        class="pet" />
      <div class="meg-box">
        <h3>소형견(체고 35cm 이하)</h3>
        <span>목욕 + 위생 : 25,000원</span><br />
        <span>전체클리핑 : 30,000원</span><br />
        <span>스포팅 : 65,000원</span><br />
        <span>가위컷 : 80,000원</span>
      </div>
    </div>
    <div>
      <div class="inner-img">
        <img
          src="./img/중형-푸들.png  "
          alt=""
          class="pet" />
        <div class="meg-box">
          <h3>중형견(체고 35cm 이하)</h3>
          <span>목욕 + 위생 : 30,000원</span><br />
          <span>전체클리핑 : 45,000원</span><br />
          <span>스포팅 : 75,000원</span><br />
          <span>가위컷 : 80,000원</span>
        </div>
      </div>
    </div>
    <div>
      <div class="inner-img">
        <img
          src="./img/대형-리트리버.png  "
          alt=""
          class="pet" />
        <div class="meg-box">
          <h3>대형견(체고 35cm 이하)</h3>
          <span>목욕 + 위생 : 40,000원</span><br />
          <span>전체클리핑 : 60,000원</span><br />
          <span>스포팅 : 85,000원</span><br />
          <span>가위컷 : 100,000원</span>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="footer_wrap">
      <div class="footer_text">
        <p>Email : rnehddus93@gmail.com</p>
        <p>Github : https://github.com/GooDongYeon</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* #wrap {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content {
  flex: 1;
} */

.container {
  padding-left: 80px;
  width: 100%;
  height: 550px;
  margin-top: 15px;
  display: flex;

}

.inner-img {
  padding-left: 30px;
}

.inner-img img {
  display: flex;
  width: 300px;
  height: 300px;
}

.meg-box {
  margin-top: 15px;
  border: 1px solid #eee;
  width: 300 px;
  height: 200px;
  box-shadow: 3px 3px 3px #eee;
  padding-left: 10px;
}

.footer {
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  background: #1B1B1E;
 }
 .footer .footer_wrap {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
}
.footer .footer_text {
  color: white;
  text-align: center;
  margin-top: 12px;
}
.footer .footer_text p {
  line-height: 1.6;
  font-size: 15px;
  margin-bottom: 0;
}
</style>
