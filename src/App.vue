<template>
  <div id="app">
    <app-header></app-header>
    <img src="./assets/logo.png">
    <router-view class="container"/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'App',
  components: { AppHeader, AppFooter }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  text-align: center;
  color: #37474f;
  margin-top: 0 auto;
  padding: 0;
}
.container {
  padding-bottom: 4rem;
}
</style>
