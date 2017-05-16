<template lang="html">
<div>

  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title"><b>กำหนดการนิเทศ</b></h1>
    </div>
    <br>
    <div class="columns">
      <div class="column is-8 is-offset-2">

        <table class="table">
          <thead>
            <tr>
              <th><b>ลำดับ</b></th>
              <th><b>ชื่อ นามสกุล</b></th>
              <th><b>ชื่อบริษัท</b></th>
              <th><b>สถานะ</b></th>
              <th><b>วันนิเทศ</b></th>
            </tr>
          </thead>
          <tr v-for="(user, index) in allUser">
            <td>{{index + 1}}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.companyName }}</td>
            <td>{{ user.type }}</td>
            <td>{{ user.active }}</td>
          </tr>
          <!-- <tr>
            <td>นายกมลภพ เเพงวังทอง</td>
            <td>จันทร์ 31 ก.ค 2560</td>
          </tr> -->
        </table>

      </div>
    </div>

    <!-- <div class="container has-text-centered">
      <h1 class="title"><b>แบ่งออกเป็น 2 แบบนะ</b></h1>
    </div> -->



</section>

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Calendar',
  computed: {
    ...mapGetters([
      'allUser'
    ])
  },
  methods: {
    ...mapActions([
      'getUser'
    ])
  },
  mounted () {
    this.$store.dispatch('getUser')
  }
}
</script>

<style lang="css">
</style>
