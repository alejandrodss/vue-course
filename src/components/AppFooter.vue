<template>
    <footer>
        <span>Coding with <a href="//vuejs.org">Vue.js</a> in Colombia</span>
    </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style lang="scss" scoped>
  footer {
    box-sizing: border-box;
    background-color: #cfd8dc;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    position: fixed;

      a {
        text-decoration: none;
        color: #546E7A;
      }
  }
</style>
