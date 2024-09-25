module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'prettier'
    ],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
      'indent': ['error', 2]  // Setzt die Einrückung auf 2 Leerzeichen
    },
  };
  