/* global swal */
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
Vue.use(Vuex)
// import axios from 'axios'
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
// const playlists = firebase.database().ref('playlists')

const provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
  'display': 'popup'
})

const store = new Vuex.Store({
  state: {
    displayName: '',
    photoURL: '',
    uid: ''
  },
  getters: {
    displayName: state => { return state.displayName },
    photoURL: state => { return state.photoURL },
    uid: state => { return state.uid }
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
    }
  },
  mutations: {
    logingFacebook (state) {
      firebase.auth().signInWithPopup(provider).then((result) => {
        let user = result.user
        state.displayName = user.displayName
        state.photoURL = user.photoURL
        state.uid = user.uid
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
    }
  }
})

export default store
