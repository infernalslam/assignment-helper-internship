<template lang="html">
  <div>
    <section class="hero bg is-fullheight">
      <div class="hero-body">
        <div class="container">


          <div class="hero-body">
            <div class="container has-text-centered">

              <div class="columns">
                <div class="column"></div>
                <div class="column center">
                  <figure class="image is-128x128">
                    <img src="https://www.aaltra.eu/assets/img/yerpa-apps/yerpa_timeclock.svg">
                  </figure>
                </div>
                <div class="column"></div>
              </div>


              <h1 class="title">
                อ่านด้วยนะคะทุกๆคน!!! ถึงนักศึกษา
              </h1>
              <h2 class="subtitle">
                อ่านด้วยนะคะทุกๆคน!!! ถึงนักศึกษาที่ไปฝึกงานทุกคนทั้ง "สหกิจ" และ "ฝึกงานทั่วไป"
              </h2>
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
  padding-left: 20%;
}


</style>
