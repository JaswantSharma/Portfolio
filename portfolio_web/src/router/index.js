import { createRouter , createWebHistory } from "vue-router";
import Snowfall from "@/components/Snowfall.vue";
import Details from "@/components/Details.vue";



  const routes = [
    {
      path: '/',
      name: 'Snowfall',
      component: Snowfall
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
    
  ]

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });
  
  export default router;

