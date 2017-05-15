<template lang="html">
  <div>
    <section class="section is-bg">
      <br><br><br>


      <div class="container">
        <div class="columns">

          <div class="column"></div>

          <div class="column">

            <div class="card">
              <img src="http://www.theinternship.io/_nuxt/img/designer.5ee021f.jpg">
              <div class="card-detail">
                <h1 class="title"> <b>ฝึกงาน</b>  </h1>
                <b>ฝึกงาน 2 เดือน  1 มิ.ย. - 31 ก.ค. 25560</b>
                <br>
                <a class="button is-danger"><b>ลงทะเบียน</b></a>
              </div>
            </div>


          </div>




          <div class="column">
            <div class="card">
              <img src="http://www.theinternship.io/_nuxt/img/dev.be1249b.jpg">
              <div class="card-detail">
                <h1 class="title"><b>สหกิจศึกษา</b></h1>
                <b>ฝึกงาน 6 เดือน  1 มิ.ย. - 31 พ.ย. 25560</b>
                <br>
                <a class="button is-danger"><b>ลงทะเบียน</b></a>
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
  name: 'Type'
}
</script>

<style scoped>

.is-bg {
  background: linear-gradient(135deg,#1a8efa,#5931b5);
  /*background: linear-gradient(to right, rgba(255,82,122,1) 0%, rgba(231,67,64,1) 100%);*/
}

.card {
  clear: both;
  height: 200px;
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

</style>
