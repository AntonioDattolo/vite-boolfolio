import { createRouter, createWebHistory } from 'vue-router'

import AppHome from './pages/AppHome.vue'
import AppAbout from './pages/AppAbout.vue';
import AppProjects from './pages/AppProjects.vue';
import AppContatcs from './pages/AppContatcs.vue';


const router = createRouter( {
 history : createWebHistory(),   
 routes: [
        { path: '/home', name:'home', component: AppHome },
        { path: '/About', name:'About', component: AppAbout },
        { path: '/projects', name:'projects', component: AppProjects },
        { path: '/contacts', name:'Contacts', component: AppContatcs }
        ],
  
});



export { router };