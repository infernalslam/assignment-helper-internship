<template lang="html">
  <div>
    <section class="hero bg is-fullheight">
      <div class="hero-body">
        <div class="container">


          <div class="hero-body">
            <div class="container has-text-centered">


                <img src="https://www.aaltra.eu/assets/img/yerpa-apps/yerpa_timeclock.svg" class="hero-logo" width="128px" height="128px">



              <h1 class="title">
                อ่านด้วยนะคะทุกๆคน!!! ถึงนักศึกษา
              </h1>
              <h2 class="subtitle">
                อ่านด้วยนะคะทุกๆคน!!! ถึงนักศึกษาที่ไปฝึกงานทุกคนทั้ง "สหกิจ" และ "ฝึกงานทั่วไป"
              </h2>
            </div>
          </div>


              <div class="columns">
                  <div class="column"></div>
                  <div class="column center">
                     <i class="fa fa-chevron-down down" aria-hidden="true"></i>
                  </div>
                  <div class="column"></div>
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



</style>
