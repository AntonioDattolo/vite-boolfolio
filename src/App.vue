<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import ProjectCard from './components/ProjectCard.vue'

import axios from "axios"


export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    ProjectCard
  },
  data() {
    return {
      projectsPage : [],
      currentPage :[],
      activePage : 1,
      base_url : "http://localhost:8000/"

    }
  },
  methods: {

    getProjects() {

      axios.get('http://127.0.0.1:8000/api/projects?page=' + this.activePage).then(response => {
        console.log(response)
        this.currentPage = response.data.result.data
        console.log(this.currentPage, "questa è la pgina")
        console.log(this.activePage)
      })
    },
    getPageNext() {
      this.activePage++
      console.log(this.activePage)
      if (this.activePage == this.projectsPage.length - 1) {
        this.activePage = 1
      }
      this.getProjects()
    },
    getPagePrev(){
      this.activePage--
      console.log(this.activePage) 
      if(this.activePage < 1 ){
        this.activePage = this.projectsPage.length - 2 
      }
      this.getProjects()
    }

},
        
 
mounted(){
    axios.get('http://127.0.0.1:8000/api/projects').then(response => {
      console.log(response)
      console.log(this.projectsPage)
      this.projectsPage = response.data.result.links
      console.log(this.projectsPage)
    })
    this.getProjects()
  }

}
</script>

<template>
  <AppHeader /> 
  <AppMain />
  <AppFooter />
  <section class="d-flex justify-content-end my-4">
    <button @click="getPagePrev()"> prev</button>
    <button @click="getPageNext()"> next</button>

  </section>
  <section class="d-flex justify-content-start flex-wrap">
    <ProjectCard v-for="projects in currentPage" :project="projects"></ProjectCard>
  </section>
  
  
  
</template>

<style scoped>
  
</style>