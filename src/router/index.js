import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Internship2Mounth from '@/components/Internship2Mounth'
import Internship6Mounth from '@/components/Internship6Mounth'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Internship2Mounth',
      name: 'Internship2Mounth',
      component: Internship2Mounth
    },
    {
      path: '/Internship6Mounth',
      name: 'Internship6Mounth',
      component: Internship6Mounth
    }
  ]
})
