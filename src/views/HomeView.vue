<template>
  <div class="home">
    <h1>Busca CEP/Endereço</h1>
    <div class="wrapper">
      <div class="buttonsWrapper bottomLine">
        <button @click="ativarCEP">Buscar por CEP</button>
        <button @click="ativarEndereco">Buscar por Endereço</button>
      </div>

      <div class="wrapper-content">
        <div class="wrapper">
          <!-- CEP -->
          <div
            v-if="this.pesquisaPorCEP"
            id="cepWrapper"
            class="formWrapper bottomLine displayBlock"
          >
            <Input
              newId="cep"
              type="text"
              labelText="CEP"
              placegolderText="Digite o CEP"
            />
            <Button @click="consultarEndereco">Consultar Endereço</Button>
          </div>
          <!-- ENDEREÇO -->
          <div
            v-if="!this.pesquisaPorCEP"
            id="enderecoWrapper"
            class="formWrapper"
          >
            <Input
              newId="rua"
              type="text"
              labelText="Rua"
              placegolderText="Digite a rua"
            />
            <Input
              newId="cidade"
              type="text"
              labelText="Cidade"
              placegolderText="Digite a cidade"
            />
            <Input
              newId="uf"
              type="text"
              labelText="UF"
              placegolderText="Digite a UF"
            />
            <Button @click="consultarCEP">Consultar CEP</Button>
          </div>
        </div>

        <div class="wrapper">
          <!-- RESULTADO CEP  -->
          <div v-if="this.dados && this.pesquisaPorCEP" class="formWrapper">
            <ul class="list">
              <li>
                Logradouro: <strong>{{ dados.logradouro }}</strong>
              </li>
              <li>
                Bairro: <strong>{{ dados.bairro }}</strong>
              </li>
              <li>
                Localidade: <strong>{{ dados.localidade }}</strong>
              </li>
              <li>
                UF: <strong>{{ dados.uf }}</strong>
              </li>
            </ul>
            <Button @click="favoritar">Favoritar</Button>
          </div>
          <!-- RESULTADO ENDEREÇO  -->
          <div v-if="this.dados && !this.pesquisaPorCEP" class="formWrapper">
            <ul class="list">
              <li>
                CEP: <strong>{{ dados[0].cep }}</strong>
              </li>
            </ul>
            <Button @click="favoritar">Favoritar</Button>
          </div>
        </div>
      </div>

      <!-- end -->
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  name: "HomeView",
  components: { Input, Button },
  data: function () {
    return {
      dados: null,
      pesquisaPorCEP: true,
    };
  },
  methods: {
    ativarCEP() {
      this.pesquisaPorCEP = true;
      this.dados = null;
    },
    ativarEndereco() {
      this.pesquisaPorCEP = false;
      this.dados = null;
    },
    redirectView() {
      const userIsLogged = this.$store.state.userLogged;
      if (!userIsLogged) {
        this.$router.push("conectar");
      }
    },
    consultarEndereco() {
      const cep = document.querySelector("#cep").value;

      if (cep && cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json`)
          .then((response) => response.json())
          .then((json) => {
            this.dados = json;
          });
      }
    },
    consultarCEP() {
      const uf = document.querySelector("#uf").value;
      const cidade = document.querySelector("#cidade").value;
      const rua = document.querySelector("#rua").value;

      fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json`)
        .then((response) => response.json())
        .then((json) => {
          this.dados = json;
        });
    },
    favoritar() {
      if (this.pesquisaPorCEP) {
        this.$store.commit("setNewFavorite", {
          cep: this.dados.cep,
          logradouro: this.dados.logradouro,
          bairro: this.dados.bairro,
          localidade: this.dados.localidade,
          uf: this.dados.uf,
        });
      } else {
        this.$store.commit("setNewFavorite", {
          cep: this.dados[0].cep,
          logradouro: this.dados[0].logradouro,
          bairro: this.dados[0].bairro,
          localidade: this.dados[0].localidade,
          uf: this.dados[0].uf,
        });
      }
    },
  },
  mounted: function () {
    this.redirectView();
  },
};
</script>


<style scoped>
#enderecoWrapper,
#cepWrapper {
  gap: 25px;
  display: flex;
  flex-direction: column;
}

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

  margin: 0 auto;

  border-radius: 4px;
  background-color: #333;
}

.buttonsWrapper {
  display: flex;
  gap: 10px;

  width: 100%;

  border-radius: 4px 4px 0 0;
  padding: 30px;
}

.bottomLine {
  border-bottom: 1px solid #757575;
}

.buttonsWrapper button {
  width: 100%;
  height: 40px;

  border: none;
  border-radius: 4px;

  color: #333;
  background-color: #eee;

  cursor: pointer;
}

button {
  font-size: 16px;
  font-family: "Poppins", sans-serif;
}

.formWrapper {
  width: 100%;
  padding: 30px;
}

.displayBlock {
  display: block;
}

.formWrapper.displayBlock button {
  display: block;
  background-color: #70ebea;
}

strong {
  color: #333;
}

.displayNone {
  display: none;
}

.list {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 30px;
  flex-direction: column;
  width: 100%;
}

.list li {
  background-color: #eee;
  width: inherit;
  text-align: left;
  border-radius: 4px;
  padding: 4px;
  padding-left: 10px;
}
</style>