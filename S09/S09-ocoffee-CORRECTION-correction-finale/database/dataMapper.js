const db = require("./database-client");

const dataMapper = {
  async getLatestProducts() {
    const result = await db.query(`SELECT * FROM coffee ORDER BY created_at DESC LIMIT 3`);
    const products = result.rows;
    return products;
  },

  async getAllAvailableProducts() {
    const sqlQuery = `SELECT * FROM "coffee" WHERE "available" = true;`;
    const result = await db.query(sqlQuery);
    return result.rows;
  },

  async getAllCategories() {
    const sqlQuery = 'SELECT * FROM "category";';
    const result = await db.query(sqlQuery);
    return result.rows;
  },

  async getProductById(id) {
    const sqlQuery = `
      SELECT 
        coffee.*, 
        category.name AS category_name     -- to avoid confusion between coffee.name and category.name
      FROM 
        coffee JOIN category 
      ON 
        coffee.category_id = category.id 
      WHERE 
        coffee.id = $1
      ;
    `;
    const result = await db.query(sqlQuery, [id]);
    return result.rows[0];
  }
};

module.exports = dataMapper;
