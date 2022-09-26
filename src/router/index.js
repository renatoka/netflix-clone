import { createRouter, createWebHistory, routerKey } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/browse',
      name: 'browse',
      component: () => import('../views/BrowseView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('../views/MoviesView.vue'),
    }
  ]
})

/* Simple way of route guarding /browse and /movies page.
If the user is not logged in, don't allow them to see those pages.
Will update and add better security once I learn how */

router.beforeEach((to) => {
  if (to.path === '/browse' && getAuth().currentUser === null) {
    router.push('/login')
  } else if (to.path === '/movies' && getAuth().currentUser === null) {
    router.push('/login')
  }
})

export default router
