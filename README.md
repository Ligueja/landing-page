<b>PROGRAMA STARTER FULL STACK WEB - GROWDEV</b>

<b>Módulo: REACT 1</b>

<b>ATIVIDADE DE AULA - Landing Page</b>

1 - Crie uma landing page utilizando ReactJS e Styled components com um dos temas:
- Agência de turismo
- Petshop
- Lançamento de um produto (pode ser qualquer tipo de produto, fica livre)
- Venda de um serviço (pode ser qualquer tipo de serviço, fica livre)

<b>Resultado:</b>

<img src="https://github.com/Ligueja/landing-page/blob/main/src/assets/landingpage.jpg" width="600"/>


<b>Tecnologias utilizadas:</b>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
