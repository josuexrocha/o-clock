// models/cartModel.js
const db = require("../config/db");
const { AppError } = require("../helpers/errorHelpers");

// Fonction utilitaire pour gérer les transactions
async function executeTransaction(callback) {
	const client = await db.getClient();
	try {
		await client.query("BEGIN");
		const result = await callback(client); // Exécute la fonction passée
		await client.query("COMMIT");
		return result;
	} catch (error) {
		await client.query("ROLLBACK");
		throw error;
	} finally {
		client.release();
	}
}

// Récupère le panier d'un utilisateur
async function getCart(userId) {
	try {
		const query = `
      SELECT c.product_id, c.quantity, p.name, p.price
      FROM cart c
      JOIN products p ON c.product_id = p.id
      WHERE c.user_id = $1
    `;
		const { rows } = await db.query(query, [userId]);
		return rows;
	} catch (error) {
		throw new AppError("Erreur lors de la récupération du panier (DB)", 500);
	}
}

// Ajoute un produit au panier
async function addItem(userId, productId, quantity) {
	return executeTransaction(async (client) => {
		// Vérifier si le produit existe
		const productCheck = await client.query(
			"SELECT id FROM products WHERE id = $1",
			[productId],
		);
		if (productCheck.rows.length === 0) {
			throw new AppError("Produit non trouvé (DB)", 404);
		}

		const query = `
      INSERT INTO cart (user_id, product_id, quantity)
      VALUES ($1, $2, $3)
      ON CONFLICT (user_id, product_id) DO UPDATE
      SET quantity = cart.quantity + $3
    `;
		await client.query(query, [userId, productId, quantity]);
	});
}

// Met à jour un produit dans le panier
async function updateItem(userId, productId, quantity) {
	return executeTransaction(async (client) => {
		const query = `
      UPDATE cart
      SET quantity = $3
      WHERE user_id = $1 AND product_id = $2
    `;
		const result = await client.query(query, [userId, productId, quantity]);

		if (result.rowCount === 0) {
			throw new AppError("Produit non trouvé dans le panier (DB)", 404);
		}
	});
}

// Supprime un produit du panier
async function removeItem(userId, productId) {
	return executeTransaction(async (client) => {
		const query = `
      DELETE FROM cart
      WHERE user_id = $1 AND product_id = $2
    `;
		const result = await client.query(query, [userId, productId]);

		if (result.rowCount === 0) {
			throw new AppError("Produit non trouvé dans le panier (DB)", 404);
		}
	});
}

// Vide complètement le panier
async function clearCart(userId) {
	return executeTransaction(async (client) => {
		const query = "DELETE FROM cart WHERE user_id = $1";
		await client.query(query, [userId]);
	});
}

// Calcule le total du panier
async function getCartTotal(userId) {
	try {
		const query = `
      SELECT SUM(c.quantity * p.price) as total
      FROM cart c
      JOIN products p ON c.product_id = p.id
      WHERE c.user_id = $1
    `;
		const { rows } = await db.query(query, [userId]);
		return rows[0].total || 0;
	} catch (error) {
		throw new AppError("Erreur lors du calcul du total du panier (DB)", 500);
	}
}

module.exports = {
	getCart,
	addItem,
	updateItem,
	removeItem,
	clearCart,
	getCartTotal,
};
