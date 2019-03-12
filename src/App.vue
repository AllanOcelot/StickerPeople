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
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: #efefef;
    color: #2c3e50;
    min-height: 100vh;
    padding-bottom: 60px;
    position: relative;

    h1 {
        font-family: 'Pacifico', cursive;
    }

    a {
        color: #1c4f82;
        transition: color 0.2s;
        text-decoration: none;

        &:hover {
            color: #4488cc;
        }
    }
}

@import'~bootstrap/dist/css/bootstrap.css';
</style>
