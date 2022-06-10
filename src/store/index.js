import { createStore } from "vuex";

export default createStore({
  state: {
    users: [
      {
        email: "a",
        password: "a",
      },
      {
        email: "conv@email",
        password: "123",
      },
    ],
    favorites: [],
    userLogged: false,
  },
  getters: {},
  mutations: {
    setUserLogged(state, bool) {
      state.userLogged = bool;
    },
    setNewUser(state, { email, password }) {
      state.users.push({
        email: email,
        password: password,
      });
    },
    setNewFavorite(state, { cep, logradouro, bairro, localidade, uf }) {
      state.favorites.push({
        cep: cep,
        logradouro: logradouro,
        bairro: bairro,
        localidade: localidade,
        uf: uf,
      });
    },
  },
  actions: {},
  modules: {},
});
