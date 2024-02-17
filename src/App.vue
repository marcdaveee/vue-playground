<template>
  <!-- What was learned?
    Passing props is passing data from parent to child components
    - inside the parent component, register the its child components
    - inside the child component, props are registered in the props: property
    
    Emitting custom events is passing events from child to parent
    - create custom emits in the methods of the child component
    - syntax: this.$emits("nameOftheEvent")
    - the parent component listens to the the child component emit events
    - to capture the emit, the parent component will use the following syntax: @Close, @nameOfTheEmmitedEvent


-->

  <h1>{{ title }}</h1>
  <div v-if="isModalShown">
    <Modal :header="header" :text="text" theme="dark" @close="toggleModal" />
  </div>
  <div>
    <button @click="toggleModal">Open Modal</button>
  </div>
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
      isModalShown: false,
    };
  },

  methods: {
    toggleModal() {
      this.isModalShown = !this.isModalShown;
    },
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
