<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1>{{ title }}</h1>
  <Modal :header="header" :text="text" />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Modal,
  },

  data() {
    return {
      title: "My First Vue App",
      header: "Sign up for Giveaway!",
      text: "Grap your coupons for discounts!",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  margin: 10px 0;
}
</style>
