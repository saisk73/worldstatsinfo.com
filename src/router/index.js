import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Symptoms from '../views/Symptoms.vue'
import Precautions from '../views/Precautions.vue'
import Dos from '../views/Dos.vue'
import Countries from '../views/Countries.vue'
import Blogs from '../views/Blogs.vue'
import Blog from '../views/Blog.vue'
// about WorldStatsInfo
import About from '../views/about/About.vue'
import Technologies from '../views/about/Technologies.vue'
import Termsofservice from '../views/about/Termsofservice.vue'
import Privacypolicy from '../views/about/Privacypolicy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/symptoms',
    name: 'Symptoms',
    component: Symptoms
  },
  {
    path: '/precautions',
    name: 'Precautions',
    component: Precautions
  },
  {
    path: '/dos',
    name: 'Dos',
    component: Dos
  },
  {
    path: '/countries/:country',
    name: 'Countries',
    component: Countries
  },
  {
    path: '/blog',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/blog/:blogname',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/technologies',
    name: 'technologies',
    component: Technologies
  },
  {
    path: '/termsofservice',
    name: 'termsofservice',
    component: About
  },
  {
    path: '/privacypolicy',
    name: 'privacypolicy',
    component: Privacypolicy
  },
  {
    path: '**',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
