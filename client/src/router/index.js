import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import Songs from '@/components/Songs.vue'
import CreateSong from '@/components/CreateSong.vue'
import ViewSong from '@/components/ViewSong.vue'
import EditSong from '@/components/EditSong.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs
  },
  {
    path: '/songs/create',
    name: 'songs-create',
    component: CreateSong
  },
  {
    path: '/songs/:songId',
    name: 'song',
    component: ViewSong
  },
  {
    path: '/songs/:songId/edit',
    name: 'edit-song',
    component: EditSong
  },
  {
    path: '*',
    redirect: 'songs'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
