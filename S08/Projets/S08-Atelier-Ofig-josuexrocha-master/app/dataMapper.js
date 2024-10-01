const client = require("./database");

const dataMapper = {
	async getAllFigurines() {
		const result = await client.query(`
          SELECT figurine.*, category.name AS category
          FROM figurine
          JOIN category ON figurine.category_id = category.id
        `);
		return result.rows;
	},

	async getOneFigurine(id) {
		const result = await client.query(
			`
          SELECT figurine.*, category.name AS category
          FROM figurine
          JOIN category ON figurine.category_id = category.id
          WHERE figurine.id = $1
        `,
			[id],
		);
		return result.rows[0];
	},

	async getCategoriesWithCount() {
		const result = await client.query(`
      SELECT category.name, COUNT(figurine.id) AS count
      FROM category
      LEFT JOIN figurine ON category.id = figurine.category_id
      GROUP BY category.name
    `);
		return result.rows;
	},

	async getFigurinesByCategory(categoryName) {
		const result = await client.query(
			`
		  SELECT figurine.*, category.name AS category
		  FROM figurine
		  JOIN category ON figurine.category_id = category.id
		  WHERE category.name = $1
		  `,
			[categoryName],
		);
		return result.rows;
	},

	async getReviewsByFigurineId(id) {
		const result = await client.query(
			"SELECT * FROM review WHERE figurine_id = $1",
			[id],
		);
		return result.rows;
	},

	async searchFigurines(query) {
		const result = await client.query(
			`
		  SELECT figurine.*, category.name AS category
		  FROM figurine
		  JOIN category ON figurine.category_id = category.id
		  WHERE figurine.name ILIKE $1 OR figurine.description ILIKE $1
		`,
			[`%${query}%`],
		);
		return result.rows;
	},

	async getFigurineWithAverageNote(id) {
		const result = await client.query(
			`
		  SELECT figurine.*, category.name AS category, AVG(review.note) AS average_note
		  FROM figurine
		  JOIN category ON figurine.category_id = category.id
		  LEFT JOIN review ON figurine.id = review.figurine_id
		  WHERE figurine.id = $1
		  GROUP BY figurine.id, category.name
		`,
			[id],
		);
		return result.rows[0];
	},
};

module.exports = dataMapper;
