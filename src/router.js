import { createRouter, createWebHistory } from 'vue-router'

import AppHome from './pages/AppHome.vue'
import AppAbout from './pages/AppAbout.vue';
import AppProjects from './pages/AppProjects.vue';
import AppContatcs from './pages/AppContatcs.vue';
import SelectedProject from './pages/SelectedProject.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter( {
 history : createWebHistory(),   
 routes: [
        { path: '/home', name:'home', component: AppHome },
        { path: '/About', name:'About', component: AppAbout },
        { path: '/projects', name:'projects', component: AppProjects },
        { path: '/contacts', name:'Contacts', component: AppContatcs },
        { path: '/projects/:slug', name: 'project', component: SelectedProject},
        { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
        ],
});



export { router };