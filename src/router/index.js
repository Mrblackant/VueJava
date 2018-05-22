import Vue from 'vue'
import Router from 'vue-router'
import simpleGet from '@/components/simpleGet'//简单的get接口
import simpleForm from '@/components/simpleForm'//简单的form
import simpleTable from '@/components/simpleTable'//简单的table
import superSimple from '@/components/superSimple/get'//极简版的get
import superSimplePost from '@/components/superSimple/post'//极简版的post

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'simpleGet',
      component: simpleGet
    },{
    	path: '/form',
      name: 'simpleForm',
      component: simpleForm
    }
    ,{
      path: '/table',
      name: 'simpleTable',
      component: simpleTable
    },{
      path: '/superSimple',
      name: 'superSimple',
      component: superSimple
    }
    ,{
      path: '/superSimplePost',
      name: 'superSimplePost',
      component: superSimplePost
    }
  ]
})

