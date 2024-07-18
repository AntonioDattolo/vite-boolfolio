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
    <div class="card col-3 p-2" >
        <img :src="project.img" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{project.description}}.</p>
            <h5 class="btn btn-primary">{{project.type.name}}</h5>
            <h6>
                <i :class="project.type.icon "></i>
            </h6>
        </div>
    </div>
</template>

<style scoped>

</style>
