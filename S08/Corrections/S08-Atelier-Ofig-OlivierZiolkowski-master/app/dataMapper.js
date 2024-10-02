const client = require("./database");

const dataMapper = {
  // Méthode pour récupérer toutes les figurines
  getAllFigurines: async () => {
    const sql = `SELECT figurine.*, ROUND(AVG(review.note)) AS note
                  FROM figurine
                  INNER JOIN review
                  ON figurine.id = review.figurine_id
                  GROUP BY figurine.id;`;
    // (c) Made by Joseph
    // On récupère le résultat de la promesse
    const result = await client.query(sql);
    // On retourne le résultat
    return result.rows;
  },

  // Méthode de récupération d'une seule figurine
  getOneFigurine: async (figId) => {
    const sql = `SELECT * FROM figurine WHERE id = ${figId}`;
    const result = await client.query(sql);
    return result.rows[0];
  },

  // Méthode de récupération des reviews d'une figurine
  getFigurineReviews: async (figId) => {
    const sql = `SELECT * FROM review WHERE figurine_id = ${figId}`;
    const result = await client.query(sql);
    return result.rows;
  },

  // Méthode permettant de récupérer les catégories et nombre de figurines associées
  getCategories: async () => {
    const sql = `SELECT category AS name, COUNT(*) AS nb_figurines FROM figurine GROUP BY category;`;
    const result = await client.query(sql);
    return result.rows;
  },

  // Méthode permettant de récupérer les figurines d'une catégorie
  getFigurinesByCategory: async (categoryName) => {
    const sql = `SELECT * FROM figurine where category = '${categoryName}'`;
    const result = await client.query(sql);
    return result.rows;
  },
};

module.exports = dataMapper;
