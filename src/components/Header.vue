<template lang="html">
  <div>
    <section class="hero bg is-fullheight">
      <br>
      <!-- <div class="arrow-right">
        <span> หน้า Sign in ของอาจารย์ค่ะ </span>
      </div> -->
      <!-- <div class="columns">
        <div class="column is-5"></div>
        <div class="column is-5"></div>
        <div class="column is-2">
          <a class="button is-danger is-focused" v-if="adminState === false" style="color: #fff;" @click="logingFacebook()"> <b>หน้า Sign in ของอาจารย์ค่ะ</b></a>
          <div class="box is-danger is-focused" v-if="adminState === true" style="color: #000; cursor: pointer;" @click="logOut()">
            <b>logOut | {{ displayName }} กดเพื่อออก</b> <br>
            <img :src="photoURL" width="50px" height="50%">
          </div>
        </div>
      </div> -->


      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-right nav-menu">
              <span class="nav-item">
                <a class="button is-danger is-focused" v-if="adminState === false" style="color: #fff;" @click="logingFacebook()"> <b>หน้า Sign in ของอาจารย์ค่ะ</b></a>
                <a class="button is-success is-focused" v-if="adminState === true" style="color: #fff; cursor: pointer;" @click="logOut()">
                  <img :src="photoURL">&nbsp&nbsp <b> logOut | {{ displayName }} กดเพื่อออก</b>
                </a>
              </span>
            </div>
          </div>
        </header>
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
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Header',
  methods: {
    ...mapActions([
      'logingFacebook',
      'logOut'
    ]),
    logingFacebook () {
      this.$store.dispatch('logingFacebook')
    }
  },
  computed: {
    ...mapGetters(['adminState', 'displayName', 'photoURL'])
  }
}
</script>

<style scoped>


img {
  border-radius: 66px;
}
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
