// src/app.js
const { Client } = require ('pg');

console.log(process.env.DB_URI);

const client = new Client({
  connectionString: process.env.DB_URI,
})

client.connect();

// on exporte le client connecté
module.exports = client;