<template lang="html">
  <div>
    <section class="section is-bg">
      <br><br><br>

      <div class="container has-text-centered">
        <h2 class="title" style="color: #fff;"><b>กรอกข้อมูลให้ครบนะจ๊ะ เด็กๆ</b></h2> <br>
      </div>


      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column">
            <div class="card">
              <img src="http://www.theinternship.io/_nuxt/img/dev.be1249b.jpg">
              <router-link to="/" class="button is-danger" style="float: right;"><b>กลับไปหน้าหลัก</b></router-link>
              <div class="card-detail">
                <h1 class="title"> <b>สหกิจศึกษา</b>  </h1>

                <b>ชื่อ นามสกุล</b>
                <p class="control"><input class="input" type="text" placeholder="ชื่อนามสกุล"></p>
                <br>

                <b>เบอร์โทร</b>
                <p class="control"><input class="input" type="text" placeholder="เบอร์โทร"></p>
                <br>

                <b> ชื่อบริษัทที่ไปฝึก...... ตึก อาคาร ชั้น ....</b>
                <p class="control"><textarea class="textarea" placeholder="รายละเอียด"></textarea></p>
                <br>

                <b> link ใน google map ที่คุณปักหมุดเอาไว้ </b>
                <a href="https://www.google.co.th/maps/" target="_blank" style="color:#ff3860;"> <u><b>link google map</b></u></a>
                <p class="control"><input class="input" type="text" placeholder="ink ใน google map"></p></p>
                <br>

                <router-link to="/" class="button is-success"><b>ยืนยันจ๊ะ</b></router-link>
              </div>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>

      <br><br><br>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Internship6Mounth'
}
</script>

<style scoped >
is-bg {
  background: linear-gradient(135deg,#1a8efa,#5931b5);
  /*background: linear-gradient(to right, rgba(255,82,122,1) 0%, rgba(231,67,64,1) 100%);*/
}

.card {
  clear: both;
  /*height: 200px;*/
  height: 80vh;
  width: 70vh;

  display: block;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 3px hsla(0,0%,4%,.1), 0 0 0 1px hsla(0,0%,4%,.1);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
}
.card img {
    height: 160px;
    float: left;
}

.card .card-detail {
    margin-left: 90px;
}

.is-bg h1 {
  color: #000;
}
</style>
