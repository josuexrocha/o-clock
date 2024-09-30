// Je vais importer mon client de connexion à PG
const client = require("./client");

const dataMapper = {
  // Méthode permettant de récupérer toutes les promotions
  getAllPromos: async () => {
    // Ici, je résous ma promesse
    const result = await client.query("SELECT * FROM promo");
    // Je renvoie le résultat
    return result.rows;
  },

  // Méthode pour récupérer une seule promotion
  // (c) Yoann aka Yoyo pour les intimes
  getOnePromo: async (id) => {
    const result = await client.query(`SELECT * FROM promo WHERE id = ${id}`);
    return result.rows[0];
  },

  // Même chose made by (c) Anna
  // Retour implicite des lignes du résultat de notre requête async.
  /*
  getPromoInfo: async (id) =>
    (
      await client.query(
        `SELECT * FROM promo WHERE id = CAST(${id} AS INTEGER)`
      )
    ).rows[0],
    */

  // Méthode permettant de récupérer les étudiants d'une promo
  // (c) Claire
  getPromStudents: async (id) => {
    const result = await client.query(
      `SELECT * FROM student WHERE promo_id = CAST(${id} AS INTEGER)`
    );
    return result.rows;
  },
};

module.exports = dataMapper;
