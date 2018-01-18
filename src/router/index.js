import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'
import info from '@/components/info.vue'
Vue.use(Router)

/**
 * 网站的路由配置，网站的访问地址配置
 */

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/info',
      name: 'info',
      component: info
    }
  ]
})
