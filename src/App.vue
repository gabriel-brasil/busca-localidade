<template>
  <header>
    <nav>
      <router-link v-if="this.$store.state.userLogged == true" to="/"
        >Home</router-link
      >
      <router-link v-if="this.$store.state.userLogged == true" to="/favoritos"
        >Favoritos</router-link
      >

      <span v-if="this.$store.state.userLogged == true">|</span>
      <a v-if="this.$store.state.userLogged" @click="logout">Logout</a>

      <router-link v-if="this.$store.state.userLogged == false" to="/conectar"
        >Conectar</router-link
      >
      <span v-if="this.$store.state.userLogged == false">|</span>
      <router-link v-if="this.$store.state.userLogged == false" to="/cadastrar"
        >Cadastrar</router-link
      >
    </nav>
  </header>
  <router-view />
  <footer>💻 Desenvolvido por Gabriel Brasil</footer>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("setUserLogged", false);
      this.$router.push("/cadastrar");
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100vh;
}

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;

  display: grid;
  grid-template-rows: 60px 1fr 40px;

  height: 100%;
}

body {
  background-color: #eee;
}

header {
  display: flex;
  justify-content: center;
  height: 60px;
  background-color: #333;
}

nav {
  display: flex;
  align-items: center;
  gap: 30px;
  color: #eee;
}

nav a {
  text-decoration: none;
  color: #eee;
  font-size: 18px;
  transition: 0.2s;
  cursor: pointer;
}

nav a:hover {
  transform: translateX(-5px);
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;

  color: #eee;
  background-color: #333;
}
</style>
