const { Client } = require('pg');

// Create connexion client to Postgres database
const client = new Client(process.env.PG_URL);

// Connect it
client.connect();

// Export the client
module.exports = client;
