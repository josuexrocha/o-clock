const { Client } = require("pg");

// Configuration du client PostgreSQL
const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: false,
});

// Connexion à la base de données
client.connect();

const promoController = {
	// Utiliser async/await pour cette méthode
	async promosList(req, res) {
		try {
			const results = await client.query(
				"SELECT * FROM promotions ORDER BY name ASC",
			);
			res.render("promos", { promos: results.rows });
		} catch (error) {
			console.error("Erreur lors de l'exécution de la requête", error);
			res.status(500).send("Erreur serveur");
		}
	},

	// Utiliser async/await pour cette méthode
	async promoInfos(req, res) {
		const id = Number(req.params.id);
		try {
			const results = await client.query(
				"SELECT * FROM promotions WHERE id = $1",
				[id],
			);
			const promo = results.rows[0];
			res.render("promo", { promo });
		} catch (error) {
			console.error("Erreur lors de l'exécution de la requête", error);
			res.status(500).send("Erreur serveur");
		}
	},

	// Utiliser async/await pour cette méthode
	async listStudents(req, res) {
		const promoId = Number(req.params.id);
		try {
			// Récupérer d'abord les infos de la promo
			const promoResults = await client.query(
				"SELECT * FROM promotions WHERE id = $1",
				[promoId],
			);
			const promo = promoResults.rows[0];

			// Ensuite, récupérer les étudiants de cette promo
			const studentResults = await client.query(
				"SELECT * FROM students WHERE promo_id = $1",
				[promoId],
			);
			const promoStudents = studentResults.rows;

			res.render("promoStudents", { promo, students: promoStudents });
		} catch (error) {
			console.error("Erreur lors de l'exécution de la requête", error);
			res.status(500).send("Erreur serveur");
		}
	},
};

module.exports = promoController;
