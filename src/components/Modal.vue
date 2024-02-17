<template>
  <div class="backdrop" @click="closeModal">
    <div
      class="modal"
      :class="{ sale: theme === 'sale', dark: theme === 'dark' }"
    >
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

h1 {
  color: darkblue;
  margin: 20px 0;
}

.modal.sale {
  background: darkgreen;
  color: #fff;
}

.modal.sale h1,
.modal.dark h1 {
  color: #fff;
}

.modal.dark {
  background: darkblue;
  color: #fff;
}
</style>
