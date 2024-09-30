// Récupérer la classe Client provenant du module 'pg'
const { Client } = require("pg");

// Se connecter au serveur en tant que client
// 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
// URL : https://node-postgres.com/features/connecting#connection-uri
const client = new Client(process.env.PG_URL);

// Nous permet de lancer la connexion au serveur de BDD
client.connect();

module.exports = client;
