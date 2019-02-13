<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/includes/Header.vue';
import Footer from '@/components/includes/Footer.vue';

export default {
    name: 'app',
    components: {
        Header,
        Footer,
    }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import'~bootstrap/dist/css/bootstrap.css';
</style>
