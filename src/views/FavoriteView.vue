<template>
  <div class="favorites">
    <h1>Favoritos</h1>

    <div class="wrapper" v-if="this.$store.state.favorites.length > 0">
      <ul class="list">
        <li v-for="(item, index) in showFavorites()" :key="index">
          <span>Cep: {{ item.cep }}</span>
          <span>Logradouro: {{ item.logradouro }}</span>
          <span>Bairro: {{ item.bairro }}</span>
          <span>Localidade: {{ item.localidade }}</span>
          <span>UF: {{ item.uf }}</span>
        </li>
      </ul>
    </div>

    <div v-if="this.$store.state.favorites.length === 0">Nenhum item favoritado.</div>
  </div>
</template>

<script>
export default {
  name: "FavoriteView",
  components: {},
  data: function () {
    return {};
  },
  methods: {
    showFavorites() {
      return this.$store.state.favorites;
    },
    redirectView() {
      const userIsLogged = this.$store.state.userLogged;
      if (!userIsLogged) {
        this.$router.push("conectar");
      }
    },
  },
  mounted: function () {
    this.redirectView();
  },
};
</script>


<style scoped>
h1 {
  margin: 30px 0;
  font-size: 40px;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 600px;

  padding: 30px;
  margin: 0 auto;

  border-radius: 4px;
  background-color: #333;
}

.list {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-direction: column;
  width: 100%;
}

.list li {
  display: flex;
  flex-direction: column;

  background-color: #eee;
  width: inherit;
  text-align: left;
  border-radius: 4px;
  padding: 4px;
  padding-left: 10px;
}
</style>