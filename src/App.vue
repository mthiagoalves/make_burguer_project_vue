<template>
  <Navbar :logo="logo_src" :alt="app_name"/>
  <router-view />
  <Footer/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue"

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return{
      logo_src: "/img/logo.png",
      app_name: "Make your Burguer"
    }
  }
};

</script>

<style>
  *{
    font-family: 'Helvetica';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  .main-container{
    margin: 50px;
    min-height: 100vh;
  }
  
  h1{
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }

</style>
