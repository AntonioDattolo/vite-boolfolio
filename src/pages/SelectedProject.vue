<script>
import axios from 'axios'
export default {
  name : "SelectedProject",
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      project: null
    }
},
mounted() {



const url = `${this.base_url}/api/project/${this.$route.params.slug}`
console.log(url, "url dell'api")



axios.get(url).then(response => {
    console.log(response, 'chiamata axios');
    if (response.data.result.project.length != 0) {
      console.log(response.data.result.project, 'questo è il progetto');
      this.project = response.data.result.project[0]
      
    } else { 
        this.$router.push({ name: 'not-found' });
    }

  })
}
}
</script>

<template>
 <section class="container">
    <div  v-if="this.project != null">

        <h1 class="mt-5 mb-3 text-center">Progetto selezionato con slug : {{ project.slug }}</h1>
        
        <div class="text-center">
            <img :src="project.img" class="h-75" alt="...">
            <div class="card-body d-flex  flex-wrap">
                <h5 class="card-title col-12 align-self-baseline">{{ project.title }}</h5>
                <p class="col-12">{{project.description}}.</p>
                <div class="align-self-end col-12">
                    <h5>{{project.type.name}}</h5>
                    <h6>
                        <i :class="project.type.icon "></i>
                    </h6>
                
                </div>
            </div>
        </div>
        
    </div>

 </section>

</template>