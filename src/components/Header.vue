<template lang="html">
  <div>
    <section class="hero bg is-fullheight">
      <br>
      <!-- <div class="arrow-right">
        <span> หน้า Sign in ของอาจารย์ค่ะ </span>
      </div> -->
      <div class="columns">
        <div class="column is-5"></div>
        <div class="column is-5"></div>
        <div class="column is-2">
          <a class="button is-danger is-focused" style="color: #fff;"> <b>หน้า Sign in ของอาจารย์ค่ะ</b></a>
        </div>
      </div>


      <div class="hero-body">
        <div class="container">

          <div class="hero-body">
            <div class="container has-text-centered">
                <img src="https://www.aaltra.eu/assets/img/yerpa-apps/yerpa_timeclock.svg" class="hero-logo" width="128px" height="128px">
                <h1 class="title"><b>อ่านด้วยนะคะทุกๆคน!!! ถึงนักศึกษา</b></h1>
                <h2 class="subtitle"><b>อ่านด้วยนะคะทุกๆคน!!! ถึงนักศึกษาที่ไปฝึกงานทุกคนทั้ง "สหกิจศึกษา" และ "ฝึกงานทั่วไป"</b></h2>
                <h2 class="subtitle">(เฉพาะเซคซี เท่านั้น)</h2>
                <br><br>
                <i class="fa fa-chevron-down down hero-logo" aria-hidden="true"></i>
              <br>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

.bg  {
    background: linear-gradient(135deg,#1a8efa,#5931b5);
    /*background: linear-gradient(to right, rgba(255,82,122,1) 0%, rgba(231,67,64,1) 100%);*/
}

.bg .title {
  color: white;
}

.bg .subtitle {
  color: white;
}

.center {
  /*padding-left: 20%;*/
  position: relative;
  text-align: center;
}



.fa-chevron-down {
    color: #fff;
    text-shadow: 1px 1px 1px #ccc;
    font-size: 1.5em;
}


.down {
  cursor: pointer;
  display: inline-block;
  position: relative;
  -moz-animation: bounce 0.5s infinite linear;
  -o-animation: bounce 0.5s infinite linear;
  -webkit-animation: bounce 0.5s infinite linear;
  animation: bounce 0.5s infinite linear;
  colr:000;
}

@-webkit-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}
@-moz-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}
@-o-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}
@-ms-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}
@keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}

/*.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-bottom: 5px solid black;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;

  border-top: 20px solid #f00;
}*/

/*.arrow-right {
      position: relative;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-bottom: 111px solid transparent;
      border-left: 114px solid #fefefe;
}*/

/*.arrow-left {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  border-right:10px solid blue;
}*/


</style>
