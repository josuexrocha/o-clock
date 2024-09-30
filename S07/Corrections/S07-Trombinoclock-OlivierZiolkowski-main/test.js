// Récupérer la classe Client provenant du module 'pg'
const { Client } = require("pg");

// Se connecter au serveur en tant que client
// 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
// URL : https://node-postgres.com/features/connecting#connection-uri
const client = new Client(
  "postgresql://trombiadmin:trombi@localhost/trombinoclock"
);

// Nous permet de lancer la connexion au serveur
// de BDD
client.connect();

// Ensuite, on peur faire une requête à notre serveur de BDD
// via client.query()

/* - Promesses avec des callbacks en chaîne :x: 

// Node Callback Convention
// C'est une callback qui permet de traiter le résultat
// d'une Promise (mais qu'est-ce qu'une promesse ?)
client.query("SELECT * FROM promo", (error, result) => {
  // Si une erreur arrive...
  if (error) {
    // J'affiche cette erreur sur le terminal de mon serveur
    console.log(error);
    // Je mets fin à la session de connexion au serveur de BDD
    client.end();
    // En ajoutant un retour, j'évite de passer à la suite
    return;
  } else {
    // Si tout marche bien...
    console.table(result.rows);

    // Je souhaite ensuite récupérer une seule promotion
    const searchedPromo = result.rows.find((promo) => promo.name === "Mimir");

    console.table(searchedPromo);

    client.query(
      `SELECT * FROM student WHERE promo_id = ${searchedPromo.id}`,
      (error, result) => {
        if (error) {
          // J'affiche cette erreur sur le terminal de mon serveur
          console.log(error);
          // Je mets fin à la session de connexion au serveur de BDD
          client.end();
          return;
        } else {
          console.table(result.rows);
          client.end();
        }
      }
    );
  }
}); */

// Résolution des promesses via le chaînage (.then() & .catch())

/* client
  .query("SELECT * FROM promo")
  // Traitement de la première promesse
  .then((result) => {
    // Ici on traite le résultat reçu de notre première requête
    console.table(result.rows);

    // On récupère une promo
    const searchedPromo = result.rows.find((promo) => promo.name === "Mimir");

    console.table(searchedPromo);

    return client.query(
      `SELECT * FROM student WHERE promo_id = ${searchedPromo.id}`
    );
  })
  // Traitement de la deuxième promesse
  .then((result) => {
    console.table(result.rows);
    client.end();
  })
  .catch((error) => {
    // Si une erreur se trouve dans l'un de mes blocs d'exécution .then()
    // je vais traiter cette erreur ici
    console.log(error);
    client.end();
  });
  */

// Résolution de nos promesses via async / await

// On ajoute le mot-clé 'async' pour indiquer
// que notre fonction est asynchrone
async function multipleQueries() {
  // A quoi sert 'try' ?
  // Il sert à essayer de résoudre nos promesses
  // et les instructions liées à celle-ci
  try {
    // Ici, j'ajoute le mot-clé 'await' afin d'indiquer
    // que je souhaite résoudre cette promesse
    const result = await client.query("SELECT * FROM promo");

    console.table(result.rows);

    // Ici, je récupère une seule promo à stocker dans une constante
    const searchedPromo = result.rows.find((promo) => promo.name === "Mimir");

    console.table(searchedPromo);

    // Ici, on va résoudre une nouvelle promesse
    // via await
    const allPromoStudents = await client.query(
      `SELECT * FROM student WHERE promo_id = ${searchedPromo.id}`
    );

    console.table(allPromoStudents.rows);

    // Spéciale DD à Dominique
    client.end();
  } catch (error) {
    // Ici, on traite toutes les erreurs liées à nos promesses / requêtes asynchrones
    console.error(error);
    client.end();
  }
}

// On n'oublie pas d'appeler la fonction
multipleQueries();
