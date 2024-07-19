<script>

import ProjectCard from './ProjectCard.vue'

import axios from "axios"


export default {
  components: {
    ProjectCard
  },
  
  data() {
    return {
      projectsPage : [],
      currentPage :[],
      activePage : 1,
      base_url : "http://localhost:8000/api/projects",
      mid_url :"?page="
    }
  },

  methods: {
    getProjects() {

      axios.get(this.base_url + this.mid_url + this.activePage).then(response => {
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
    axios.get(this.base_url).then(response => {
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