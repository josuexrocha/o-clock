const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    // ces règles sont partagées par tous les devs du projet cela permet une cohérence
    rules: {
      // point-virgule en fin de ligne
      semi: "error",
      // une indentation = 2 espaces
      indent: ["error", 2],
      // on indique juste un "warning" pour les variables non utilisées
      "no-unused-vars": "warn",
    }
  }
];