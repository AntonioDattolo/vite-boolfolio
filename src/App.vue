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
  <AppHeader/> 
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  
  <AppMain/>
  
  <AppFooter/>
</template>

<style scoped>
  
</style>