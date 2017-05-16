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
            </tr>
          </thead>
          <tr v-for="(user, index) in allUser">
            <td>{{index + 1}} <img :src="user.photoURL" width="50px" height="50px"></td>
            <td>{{ user.name }}</td>
            <td>{{ user.companyName }}</td>
            <td>{{ user.type }}</td>
            <td v-if="adminState === false">{{ user.active }}</td>
            <td v-if="adminState === true">{{ user.active }}</td>
            <td v-if="adminState === true">
               <input type="date" v-model="date" v-show="user.id === id">
               <button @click="select(user.id)" v-show="user.id !== id"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
               <button v-show="user.id === id" @click="updateDateIn(user, date)"><i class="fa fa-reply-all" aria-hidden="true"></i></button>
               <!-- <button @click="id = user.id"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button> -->
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
      'updateDate'
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
    }
  },
  mounted () {
    this.$store.dispatch('getUser')
  }
}
</script>

<style lang="css">
</style>
