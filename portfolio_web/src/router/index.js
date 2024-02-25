import Vue from 'vue';
import VueRouter from 'vue-router'
import App from '../App.vue'
import Details from '../components/Details.vue'
import Snowfall from '../components/Snowfall.vue'


Vue.use(VueRouter)


  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
    
  ]

  const router = new VueRouter({
    mode: 'history', // Use HTML5 history mode for cleaner URLs (optional)
    base: process.env.BASE_URL,
    routes
  });
  
  export default router;

