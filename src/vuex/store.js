/* global swal */
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
Vue.use(Vuex)
import axios from 'axios'
import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyDaSOYV7SJsA9UHtTHMD3QliOIv4rh1TEU',
  authDomain: 'fitm-messenger-e96c4.firebaseapp.com',
  databaseURL: 'https://fitm-messenger-e96c4.firebaseio.com',
  projectId: 'fitm-messenger-e96c4',
  storageBucket: 'fitm-messenger-e96c4.appspot.com',
  messagingSenderId: '673516896061'
}
firebase.initializeApp(config)
const user = firebase.database().ref('user')
// const admin = firebase.database().ref('admin')

const provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
  'display': 'popup'
})

const store = new Vuex.Store({
  state: {
    displayName: '',
    photoURL: '',
    uid: '',
    allUser: [],
    adminState: false
  },
  getters: {
    displayName: state => { return state.displayName },
    photoURL: state => { return state.photoURL },
    uid: state => { return state.uid },
    allUser: state => { return state.allUser },
    adminState: state => { return state.adminState }
  },
  actions: {
    logingFacebook (context) {
      context.commit('logingFacebook')
    },
    Internship2Mounth (context) {
      context.commit('Internship2Mounth')
    },
    Internship6Mounth (context) {
      context.commit('Internship6Mounth')
    },
    uploadUserBase (context, payload) {
      context.commit('uploadUserBase', payload)
    },
    getUser (context) {
      context.commit('getUser')
    },
    updateDate (context, payload) {
      context.commit('updateDate', payload)
    },
    logOut (context) {
      context.commit('logOut')
    }
  },
  mutations: {
    logingFacebook (state) {
      firebase.auth().signInWithPopup(provider).then((result) => {
        let user = result.user
        return user
      }).then((user) => {
        axios.get('https://fitm-messenger-e96c4.firebaseio.com/admin.json').then(res => {
          let setData = []
          for (var index in res.data) {
            if (res.data.hasOwnProperty(index)) {
              setData.push({
                ...res.data[index]
              })
            }
          }
          var check = setData.findIndex(i => i.uid === user.uid)
          if (check >= 0) {
            state.displayName = user.displayName
            state.photoURL = user.photoURL
            state.uid = user.uid
            state.adminState = true
            swal({
              title: 'เข้าใช้งานเรียบร้อย!',
              text: 'สามารถแก้ไขเว็บได้ค่ะ',
              imageUrl: state.photoURL,
              imageWidth: 50,
              imageHeight: 50,
              animation: true
            })
          } else if (check === -1) {
            swal('การเข้าใช้งานไม่สมบรูณ์', 'โปรดลองใหม่นะ', 'error')
          }
        })
      }).catch((error) => {
        if (error) {
          console.log('login failures')
        }
      })
    },
    Internship2Mounth (state) {
      firebase.auth().signInWithPopup(provider).then((result) => {
        let user = result.user
        state.displayName = user.displayName
        state.photoURL = user.photoURL
        state.uid = user.uid
        swal({
          title: 'เเน่ใจว่าว่าจะลงทะเบียนนิเทศ ฝึกงาน 2 เดือน',
          text: 'กรอกข้อมูลเพื่อเข้าระบบเเล้วนะ',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'ยืนยันเลย'
        }).then(function () {
          swal(
            'อาจารย์จะบันทึกข้อมูลเเล้วนะ!',
            'Your file has been saving.',
            'success'
          )
          router.push({ path: '/Internship2Mounth' })
        })
      }).catch((error) => {
        if (error) {
          swal('login failures', 'facebook TOT', 'error')
          console.log('login failures')
          router.push({ path: '/' })
        }
      })
    },
    Internship6Mounth (state) {
      firebase.auth().signInWithPopup(provider).then((result) => {
        let user = result.user
        state.displayName = user.displayName
        state.photoURL = user.photoURL
        state.uid = user.uid
        swal({
          title: 'เเน่ใจว่าว่าจะลงทะเบียนนิเทศ สหกิจ 6 เดือน',
          text: 'กรอกข้อมูลเพื่อเข้าระบบเเล้วนะ',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'ยืนยันเลย'
        }).then(function () {
          swal(
            'อาจารย์จะบันทึกข้อมูลเเล้วนะ!',
            'Your file has been saving.',
            'success'
          )
          router.push({ path: '/Internship6Mounth' })
        })
      }).catch((error) => {
        if (error) {
          swal('login failures', 'facebook TOT', 'error')
          console.log('login failures')
          router.push({ path: '/' })
        }
      })
    },
    uploadUserBase (state, payload) {
      user.push(payload)
      swal('ส่งข้อมูลหา ' + payload.profres + 'เเล้วนะ', 'ติดตามตารางนิเทศได้ในหน้าเเรกเลยนะจ๊ะ', 'success').then(function () {
        router.push({ path: '/' })
      })
    },
    getUser (state) {
      axios.get('https://fitm-messenger-e96c4.firebaseio.com/user.json').then(res => {
        let setData = []
        for (var index in res.data) {
          if (res.data.hasOwnProperty(index)) {
            setData.push({
              ...res.data[index],
              firebaseId: index
            })
          }
        }
        state.allUser = setData
      })
    },
    updateDate (state, payload) {
      console.log('updateDate ', payload)
      firebase.database().ref('user/' + payload.firebaseId).update({
        ...payload
      })
    },
    logOut (state) {
      firebase.auth().signOut().then(() => {
        state.displayName = ''
        state.photoURL = ''
        state.uid = ''
        state.adminState = false
      }, (err) => {
        if (err) {}
      })
    }
  }
})

export default store
