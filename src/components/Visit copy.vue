<template>
  <div class="contain">
    <div class="cont-img">
      <img
        src="./img/place.png"
        alt="place" />
    </div>
    <div class="div-h2">
      <p>경상남도 김해시</p>
    </div>
    <div>
      <div>
        <p class="pl-1">
          오시는길 : 장신대역 바로 앞에 있습니다.<br />
          <span>주차정보 : 주차시설은 건물 뒷편을 이용해주세요</span>
        </p>
      </div>
      <p class="pl-2">
        전화번호 : 010 - 1234 - 4567
      </p>
      <p class="pl-3">
        이용안내 : 애완동물 미용
      </p>
    </div>
  </div>
  <div class="footer">
    <p>GitHub : https://github.com/GooDongYeon</p>
    <p>email : rnehddus93@gmail.com</p>
  </div>
</template>

<script setup>

</script>

<style scoped>
img {
  width: 100%;
  height: 500px;
  text-align: center;
  margin-top: 10px;
}

.div-h2 p {
  text-align: left;
  color: lightgray;
  font-size: 2rem;
}

.pl-1 {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  height: 70px;
}

.pl-2 {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  height: 70px;
}

.pl-3 {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  height: 70px;
}

.footer {
  background-color: black;
  color: white;
  width: 100%;
  text-align: center;
}
</style>
