import Vue from 'vue'
import Router from 'vue-router'
import LoginHome from '@/components/Login/LoginHome'
import Login from '@/components/Login/components/Login'
import register from '@/components/Login/components/register'
import Home from '@/components/Home/home'
import Lists from '@/components/Home/Lists/Lists'
import Contacts from '@/components/Home/Contacts/contacts'
import Dynamic from '@/components/Home/Dynamic/dynamic'
import Sider from '@/components/Sider/sider'
import Chat from '@/components/Chat/chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginHome',
      component: LoginHome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          name: 'Lists',
          component: Lists
        },
        {
          path: '/home/contacts',
          name: 'Contacts',
          component: Contacts
        },
        {
          path: '/home/dynamic',
          name: 'Dynamic',
          component: Dynamic
        }
      ]
    },
    {
      path: '/sider',
      name: 'Sider',
      component: Sider
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
