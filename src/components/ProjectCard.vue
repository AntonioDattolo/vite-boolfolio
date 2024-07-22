<script>


export default {
    props :
    ["project"]
    ,
  data() {
    return {
     
    }
  },
  methods: {

},
        
mounted(){
  
  }

}

</script>

<template>
    <div class="card col-3 p-2 bg-dark text-white d-flex">
        <img :src="project.img" class="card-img-top" alt="...">
        <div class="card-body d-flex  flex-wrap">
            <h5 class="card-title col-12 align-self-baseline">{{ project.title }}</h5>
            <p class="col-12">{{project.description}}.</p>
            <div class="align-self-end col-12">
              <h5>{{project.type.name}}</h5>
              <h6>
                <i :class="project.type.icon "></i>
              </h6>
              <button>
                <router-link :to="{name: 'project', params: {slug: project.slug }}">More Details</router-link>
              </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card{
  max-height: 700px;
}
</style>
