// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'
import VueRouter from 'vue-router'
import DetailPage from './pages/detail'
import VueResource from 'vue-resource'

import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'

import OrderListPage from './pages/orderList'

import axios from 'axios' 
import qs from 'qs'
import VueJsonp from 'vue-jsonp'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueJsonp)
Vue.prototype.$ajax=axios  
Vue.prototype.$qs=qs
Vue.config.productionTip = false

let router = new VueRouter({
	mode:'history',
	routes:[
        {
        	path:'/',
        	component:IndexPage
        	
        },
        {
          path:'/orderList',
          component:OrderListPage
        },
       {
        path:'/detail',
        component:DetailPage,
        redirect:'/detail/analysis',
        children:[
      {
        path:'analysis',
        component:DetailAnaPage
      },
      {
        path:'count',
        component:DetailCouPage
      },
      {
        path:'forecast',
        component:DetailForPage
      },
      {
        path:'publish',
        component:DetailPubPage
      }
    ]
        
  }
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
