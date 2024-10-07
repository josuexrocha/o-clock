// models/productModel.js
const db = require("../config/db");
const Joi = require("joi");
const { AppError } = require("../helpers/errorHelpers");

// Schéma de validation pour un produit
const productSchema = Joi.object({
	name: Joi.string().required().max(100),
	description: Joi.string().max(500),
	price: Joi.number().min(0).required(),
	stock: Joi.number().integer().min(0).required(),
	category: Joi.string().max(50),
	image_url: Joi.string().uri(),
});

// Fonction de validation des données de produit
function validateProduct(productData) {
	const { error } = productSchema.validate(productData);
	if (error) {
		throw new AppError(
			`Erreur de validation: ${error.details[0].message}`,
			400,
		);
	}
}

// Récupère tous les produits avec pagination
async function getAllProducts(limit = 6, offset = 0) {
	try {
		const query = "SELECT * FROM products ORDER BY id DESC LIMIT $1 OFFSET $2";
		const { rows } = await db.query(query, [limit, offset]);
		return rows;
	} catch (error) {
		throw new AppError("Erreur lors de la récupération des produits (DB)", 500);
	}
}

// Récupère le nombre total de produits
async function getTotalProductsCount() {
	try {
		const query = "SELECT COUNT(*) FROM products";
		const { rows } = await db.query(query);
		return Number.parseInt(rows[0].count);
	} catch (error) {
		throw new AppError("Erreur lors du comptage des produits (DB)", 500);
	}
}

// Récupère un produit par son ID
async function getProductById(productId) {
	try {
		const query = "SELECT * FROM products WHERE id = $1";
		const { rows } = await db.query(query, [productId]);
		if (rows.length === 0) {
			throw new AppError("Produit non trouvé (DB)", 404);
		}
		return rows[0];
	} catch (error) {
		throw new AppError("Erreur lors de la récupération du produit (DB)", 500);
	}
}

// Crée un produit
async function createProduct(productData) {
	try {
		// Valider les données du produit
		validateProduct(productData);

		const { name, description, price, stock, category, image_url } =
			productData;
		const query = `
      INSERT INTO products (name, description, price, stock, category, image_url)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
		const values = [name, description, price, stock, category, image_url];
		const { rows } = await db.query(query, values);
		return rows[0];
	} catch (error) {
		throw error instanceof AppError
			? error
			: new AppError("Erreur lors de la création du produit (DB)", 500);
	}
}

// Met à jour un produit
async function updateProduct(productId, productData) {
	try {
		// Valider les données du produit
		validateProduct(productData);

		const { name, description, price, stock, category, image_url } =
			productData;
		const query = `
      UPDATE products
      SET name = $1, description = $2, price = $3, stock = $4, category = $5, image_url = $6
      WHERE id = $7
      RETURNING *
    `;
		const values = [
			name,
			description,
			price,
			stock,
			category,
			image_url,
			productId,
		];
		const { rows } = await db.query(query, values);
		if (rows.length === 0) {
			throw new AppError("Produit non trouvé (DB)", 404);
		}
		return rows[0];
	} catch (error) {
		throw error instanceof AppError
			? error
			: new AppError("Erreur lors de la mise à jour du produit (DB)", 500);
	}
}

// Supprime un produit
async function deleteProduct(productId) {
	try {
		const query = "DELETE FROM products WHERE id = $1 RETURNING id";
		const { rows } = await db.query(query, [productId]);
		if (rows.length === 0) {
			throw new AppError("Produit non trouvé (DB)", 404);
		}
		return true;
	} catch (error) {
		throw error instanceof AppError
			? error
			: new AppError("Erreur lors de la suppression du produit (DB)", 500);
	}
}

module.exports = {
	getAllProducts,
	getTotalProductsCount,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};
