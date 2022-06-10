<template>
  <div class="login">
    <h1>Conectar</h1>
    <div class="wrapper">
      <Input
        id="email"
        type="text"
        labelText="Nome"
        placegolderText="Digite seu nome"
      />
      <br />
      <Input
        id="password"
        type="password"
        labelText="Senha"
        placegolderText="Digite sua senha"
      />
      <p>
        Para se cadastrar,
        <router-link to="/cadastrar">clique aqui.</router-link>
      </p>
      <br />
      <br />
      <Button id="buttonConectar" @click="conectar">Conectar</Button>
      <div v-if="errorMessage" class="error">Dados inválidos.</div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  name: "HomeView",
  components: {
    Input,
    Button,
  },
  data: function () {
    return {
      errorMessage: false,
    };
  },
  methods: {
    errorAlert() {
      const el = document.querySelector("#buttonConectar button");

      el.disabled = true;
      this.errorMessage = true;

      setTimeout(() => {
        el.disabled = false;
        this.errorMessage = false;
      }, 2000);
    },
    conectar() {
      const email = document.querySelector("#email label input").value;
      const password = document.querySelector("#password label input").value;

      if (email != "" && password != "") {
        let userNotFound = true;
        for (let index = 0; index < this.$store.state.users.length; index++) {
          const el = this.$store.state.users[index];
          if (email === el.email && password === el.password) {
            this.$store.commit("setUserLogged", true);
            userNotFound = false;
            this.errorMessage = false;
            this.$router.push("/");
            break;
          }
        }
        if (userNotFound) {
          this.errorAlert();
        }
      } else {
        this.errorAlert();
      }
    },
  },
};
</script>

<style scoped>
.login {
  width: 980px;
  margin: 0 auto;
}

.wrapper {
  width: 600px;
  background-color: #333;

  padding: 40px 30px;
  margin: auto;
  border-radius: 4px;
}

h1 {
  margin: 30px 0;
  font-size: 40px;
}

p {
  color: #eee;
  margin-top: 10px;
}

a {
  color: #eee;
}

.error {
  margin-top: 40px;
  color: #de5858;
}
</style>