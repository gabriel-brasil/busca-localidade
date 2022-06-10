<template>
  <div class="buttonElement">
    <button :id="newId"><slot /></button>
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: { newId: String },
};
</script>

<style scoped>
button {
  height: 40px;

  padding: 0 45px;

  border: none;
  border-radius: 4px;

  font-size: 20px;
  font-weight: 600;

  color: #fff;
  background-color: #4caf50;

  cursor: pointer;
  transition: 0.2s;

  font-family: "Poppins", sans-serif;
}

button:hover {
  background-color: #327334;
}

button:disabled {
  background-color: rgb(32, 32, 32);
  cursor: default;
}
</style>
