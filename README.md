# Busca Localidade

Aplicação em Vue.js para consultar informações de endereço e CEP, com autenticação simples de usuário e possibilidade de salvar endereços favoritos.

A aplicação utiliza a API pública do ViaCEP para buscar dados de localidades a partir de CEP ou endereço.

## Funcionalidades

- Cadastro de usuário
- Login na aplicação
- Busca por CEP
- Busca por endereço (rua, cidade e UF)
- Visualização dos dados retornados
- Favoritar resultados
- Listagem dos endereços favoritos

## Stack utilizada

- Vue.js
- Vue Router
- Vuex
- JavaScript
- HTML
- CSS

## Estrutura do projeto

```bash
.
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   │   ├── Button.vue
│   │   └── Input.vue
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── index.js
│   ├── views
│   │   ├── FavoriteView.vue
│   │   ├── HomeView.vue
│   │   ├── LoginView.vue
│   │   └── SigninView.vue
│   ├── App.vue
│   └── main.js
├── .browserslistrc
├── .eslintrc.js
├── .gitignore
├── babel.config.js
├── jsconfig.json
├── package.json
├── package-lock.json
├── README.md
├── vue.config.js
└── LICENSE (se existir no projeto)
```

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js
- npm

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/gabriel-brasil/busca-localidade.git
cd busca-localidade
npm install
```

## Executando a aplicação

Para iniciar o ambiente de desenvolvimento:

```bash
npm run serve
```

A aplicação estará disponível em:

```bash
http://localhost:8080
```

## Build de produção

Para gerar a versão final para produção:

```bash
npm run build
```

## Verificação de lint

Para validar o código com ESLint:

```bash
npm run lint
```

## Como usar

1. Acesse a tela de cadastro e crie um usuário.
2. Faça login com os dados cadastrados.
3. Na página inicial, escolha entre:
   - Buscar por CEP
   - Buscar por endereço
4. Consulte os dados retornados.
5. Clique em "Favoritar" para salvar o resultado.
6. Acesse a página de favoritos para visualizar os itens salvos.

## API usada

A aplicação consulta a API do ViaCEP:

- https://viacep.com.br/

## Observações

- A autenticação é simples e mantida localmente no estado da aplicação.
- Os favoritos são armazenados em Vuex durante a sessão da aplicação.

## Autor

Gabriel Brasil
