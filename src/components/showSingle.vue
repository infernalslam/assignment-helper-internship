<template lang="html">
  <div>
    <section class="hero bg is-success is-fullheight">
      <div class="hero-body">
        <div class="container">



          <div class="columns">
            <div class="column is-6 is-offset-3">

                <div class="card" v-for="v in allUser">

                  <header class="card-header">
                      <p class="card-header-title"> วันนิเทศ {{v.active}}</p>
                  </header>

                    <div class="card-image">
                        <div v-html="v.location"></div>
                    </div>
                    <div class="card-content">
                      <div class="media">
                        <div class="media-left">
                          <figure class="image is-48x48">
                            <img :src="v.photoURL" alt="Image">
                          </figure>
                        </div>
                        <div class="media-content">
                          <p class="title is-4" style="color: #000;"><b>{{ v.name }}</b></p>
                          <p class="subtitle is-6" style="color: #000;"><b>{{ v.tel }} ที่ทำงาน {{ v.companyName }}</b></p>
                          <span class="subtitle is-6" style="color: #000;"><b> Facebook : {{ v.facebook }}</b></span> <br>
                          <b style="color: #000;"> ที่อยู่บริษัท {{ v.company }}</b>
                        </div>
                      </div>

                    </div>
                  </div>



            </div>
          </div>




        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'showSingle',
  computed: {
    ...mapGetters([
      'allUser'
    ])
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.bg  {
    background: linear-gradient(135deg,#1a8efa,#5931b5);
    /*background: linear-gradient(to right, rgba(255,82,122,1) 0%, rgba(231,67,64,1) 100%);*/
}
</style>
