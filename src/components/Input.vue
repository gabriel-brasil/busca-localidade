<template>
  <div class="inputElement">
    <label>
      {{ labelText }} <br />
      <input :id="newId" :type="type" :placeholder="placegolderText" />
    </label>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    labelText: String,
    placegolderText: String,
    type: String,
    newId: String,
  },
};
</script>

<style scoped>
.inputElement {
  display: flex;
  justify-content: center;

  width: 100%;
  margin: auto;
}

label {
  display: flex;
  align-items: start;
  flex-direction: column;

  width: 100%;

  color: #eee;
}

input {
  width: inherit;
  height: 40px;

  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #333;

  margin-top: 10px;
  padding-left: 20px;

  border: none;
  border-radius: 4px;
  background-color: #eee;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);
}
</style>
