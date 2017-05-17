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
              <th v-if="adminState === true"><b>แก้วันนิเทศ</b></th>
              <th v-if="adminState === true"><b>ดูรายละเอียด</b></th>
            </tr>
          </thead>
          <tr v-for="(user, index) in allUser">
            <td><b>#{{index + 1}}</b> <img :src="user.photoURL" width="50px" height="50px"></td>
            <td><b>{{ user.name }}</b></td>
            <td><b>{{ user.companyName }}</b></td>
            <td><b>{{ user.type }}</b></td>
            <td v-if="adminState === false"><b>{{ user.active }}</b></td>
            <td v-if="adminState === true"><b>{{ user.active }}</b></td>
            <td v-if="adminState === true">
               <input type="date" v-model="date" v-show="user.id === id">
               <button @click="select(user.id)" v-show="user.id !== id" class="button is-primary is-outlined"><b>เลือก</b></button>
               <button v-show="user.id === id" class="button is-danger is-outlined"  @click="updateDateIn(user, date)"><b>อัปเดต</b></button>
               <!-- <button @click="id = user.id"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button> -->
            </td>
            <td v-if="adminState === true">
              <button class="button is-danger is-outlined" @click="showSingleIn(user)"><b>ดู</b></button>
            </td>

          </tr>
        </table>

      </div>
    </div>

</section>

</div>
</template>

<script>
import moment from 'moment'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Calendar',
  data () {
    return {
      date: [],
      value: '',
      id: ''
    }
  },
  computed: {
    ...mapGetters([
      'allUser',
      'adminState'
    ])
  },
  methods: {
    ...mapActions([
      'getUser',
      'updateDate',
      'showSingle'
    ]),
    select (userId) {
      this.id = userId
    },
    updateDateIn (user, date) {
      let march = moment(date)
      march.locale('th')
      user.active = march.format('LL')
      let payload = {
        ...user
      }
      this.$store.dispatch('updateDate', payload)
      this.date = ''
      this.id = ''
    },
    showSingleIn (user) {
      this.$store.dispatch('showSingle', user)
    }
  },
  mounted () {
    this.$store.dispatch('getUser')
  }
}
</script>

<style lang="css">
</style>
