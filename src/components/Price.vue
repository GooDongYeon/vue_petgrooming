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

  <div id="wrap">
    <div class="content"></div>
    <footer id="footer"></footer>
  </div>
</template>

<style scoped>
#wrap {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content {
  flex: 1;
}

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
</style>
