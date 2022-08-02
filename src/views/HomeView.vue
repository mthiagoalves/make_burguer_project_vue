<template>
  <Banner />
  <div class="main-container">
    <h1>Make your Burguer:</h1>
    <BurguerForm />
  </div>
</template>

<script>
import BurguerForm from "../components/BurguerForm.vue"
import Banner from "../components/Banner.vue";

export default {
  name: 'Home',

  components: {
    Banner,
    BurguerForm
  },
};
</script>

<style scoped></style>
