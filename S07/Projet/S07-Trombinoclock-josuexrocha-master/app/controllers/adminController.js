const { Client } = require("pg");

// Configuration du client PostgreSQL
const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: false,
});

// Connexion à la base de données
client.connect();

const adminController = {
	// Méthode pour afficher le formulaire d'ajout d'étudiant
	async addStudentForm(req, res) {
		try {
			// Récupérer toutes les promotions pour remplir le select
			const query = "SELECT * FROM promotions ORDER BY name ASC";
			const results = await client.query(query);
			const promos = results.rows;

			// Afficher la vue avec le formulaire, en passant la liste des promotions
			res.render("addStudent", { promos });
		} catch (error) {
			console.error("Erreur lors de l'exécution de la requête", error);
			res.status(500).send("Erreur serveur");
		}
	},

	// Méthode pour traiter le formulaire POST
	async addStudent(req, res) {
		const { first_name, last_name, github_username, promo_id } = req.body;
		try {
			// Insérer l'étudiant dans la base de données
			const query = "INSERT INTO students (first_name, last_name, github_username, promo_id) VALUES ($1, $2, $3, $4)";
			await client.query(query, [first_name, last_name, github_username, promo_id]);

			// Rediriger vers la page de la promo de l'étudiant ajouté
			res.redirect(`/promotions/${promo_id}`);
		} catch (error) {
			console.error("Erreur lors de l'ajout de l'étudiant", error);
			res.status(500).send("Erreur serveur");
		}
	},
};

module.exports = adminController;
