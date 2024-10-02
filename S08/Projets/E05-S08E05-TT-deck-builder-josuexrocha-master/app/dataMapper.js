const database = require("./database");

const dataMapper = {
	// pour récupérer toutes les cartes
	async getAllCards() {
		const query = "SELECT * FROM card";
		const result = await database.query(query);
		return result.rows;
	},

	// pour recupérer une carte par son id
	async getCard(id) {
		const query = "SELECT * FROM card WHERE id = $1";
		const values = [id];
		const result = await database.query(query, values);
		return result.rows[0];
	},

	// pour rechercher des cartes par element
	async getCardsByElement(element) {
		if (element === "null") {
			return await this.getAllCards();
		}
		const query = "SELECT * FROM card WHERE LOWER(element) = LOWER($1)";
		const values = [element];
		const result = await database.query(query, values);
		return result.rows;
	},

	async getCardsByLevel(level) {
		if (level === "null") {
			return await this.getAllCards();
		}
		const query = "SELECT * FROM card WHERE level = $1";
		const values = [level];
		const result = await database.query(query, values);
		return result.rows;
	},

	async getCardsByValue(direction, value) {
		// Mapper les directions utilisateur aux colonnes de la base de données
		const directionMap = {
			north: "value_north",
			east: "value_east",
			south: "value_south",
			west: "value_west",
		};

		const column = directionMap[direction.toLowerCase()];
		if (!column) {
			throw new Error("Direction invalide");
		}

		const query = `SELECT * FROM card WHERE ${column} >= $1`;
		const values = [value];
		const result = await database.query(query, values);
		return result.rows;
	},

	async getCardsByName(name) {
		const query = "SELECT * FROM card WHERE LOWER(name) LIKE LOWER($1)";
		const values = [`%${name}%`];
		const result = await database.query(query, values);
		return result.rows;
	},
};

module.exports = dataMapper;
