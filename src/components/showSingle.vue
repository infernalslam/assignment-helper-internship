<template lang="html">
  <div>
    <section class="hero bg is-success is-fullheight">
      <div class="hero-body">
        <div class="container">



          <div class="columns">
            <div class="column is-8 is-offset-2">



                <div class="card" v-for="v in data">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
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
      data: [1, 2, 3, 5, 6, 7, 8, 9, 10]
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
