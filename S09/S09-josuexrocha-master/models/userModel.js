// models/userModel.js
const db = require("../config/db");
const { AppError } = require("../helpers/errorHelpers");

// Crée un nouvel utilisateur
async function create(user) {
	try {
		const query = `
      INSERT INTO users (first_name, last_name, email, password)
      VALUES ($1, $2, $3, $4)
      RETURNING id
    `;
		const values = [user.firstName, user.lastName, user.email, user.password];
		const result = await db.query(query, values);
		return result.rows[0];
	} catch (error) {
		if (error.code === "23505") {
			// Gère les erreurs de duplication (par exemple, email déjà utilisé)
			throw new AppError("Cet email est déjà utilisé.", 400);
		}
		throw new AppError("Erreur lors de la création de l'utilisateur (DB)", 500);
	}
}

// Trouve un utilisateur par son email
async function findByEmail(email) {
	try {
		const query = "SELECT * FROM users WHERE email = $1";
		const result = await db.query(query, [email]);
		return result.rows[0];
	} catch (error) {
		throw new AppError(
			"Erreur lors de la recherche de l'utilisateur (DB)",
			500,
		);
	}
}

module.exports = {
	create,
	findByEmail,
};
