<template>
  <div class="signin">
    <h1>Cadastrar</h1>
    <div class="formContainer">
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
        Para se conectar, <router-link to="/conectar">clique aqui.</router-link>
      </p>
      <br />
      <br />
      <Button id="buttonConectar" @click="cadastrar">Cadastrar</Button>
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
    cadastrar() {
      const email = document.querySelector("#email label input").value;
      const password = document.querySelector("#password label input").value;
      let createNewUser = false;
      if (email != "" && password != "") {
        for (let index = 0; index < this.$store.state.users.length; index++) {
          const el = this.$store.state.users[index];
          if (email === el.email) {
            createNewUser = false;
            break;
          } else {
            createNewUser = true;
          }
        }

        if (createNewUser) {
          this.$store.commit("setNewUser", {
            email: email,
            password: password,
          });

          this.errorMessage = false;
          this.$router.push("/conectar");
        } else {
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

.formContainer {
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