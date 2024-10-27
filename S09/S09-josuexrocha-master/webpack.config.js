const path = require("node:path");

module.exports = {
    entry: "./public/js/main.js", // Point d'entrée principal
    output: {
        filename: "bundle.js", // Nom du fichier généré
        path: path.resolve(__dirname, "public/dist"), // Dossier de sortie
    },
    mode: "development", // Mode développement ou production
};
