const app = Vue.createApp({
  data() {
    return {
      greeting: "Hello World!",
      isActive: false,
    };
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },

  // mounted() {
  //   setTimeout(() => {
  //     this.greeting = "Hello, vue!";
  //   }, 3000);
  // },
});

app.mount("#app");
