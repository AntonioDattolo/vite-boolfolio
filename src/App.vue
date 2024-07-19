<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {

    }
  },
  methods: {
    goToAbout() {
      this.$router.push('/')
    },
  
  },
        
 
  mounted(){
 
  }

}
</script>

<template>
  
  
 <AppHeader></AppHeader>


 <router-view></router-view>


  
  <!-- <AppMain/>
  
  <AppFooter/> -->
</template>

<style scoped>
  
</style>