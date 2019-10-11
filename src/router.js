import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import List from './views/List.vue'
import Characters from './views/Characters'
import FilmDetail from './views/FilmDetail'
import DetailCharacter from './views/DetailCharacter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/list/:id',
      name: 'DetailFilm',
      component: FilmDetail
    }, 
    {
      path: '/character',
      name: 'Character',
      component: Characters
    },
    {
      path: '/character/:id',
      name: 'DetailCharacter',
      component: DetailCharacter
    },
    {
      path: '*',
      redirect: {
        name: 'List' 
      }, 
    }
  ]
})
