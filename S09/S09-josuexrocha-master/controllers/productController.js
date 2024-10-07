// controllers/productController.js

const productModel = require("../models/productModel");
const { AppError } = require("../helpers/errorHelpers");

async function getAllProducts(req, res, next) {
	try {
		const page = Number.parseInt(req.query.page) || 1;
		const limit = 6;
		const offset = (page - 1) * limit;

		const products = await productModel.getAllProducts(limit, offset);
		const totalProducts = await productModel.getTotalProductsCount();
		const totalPages = Math.ceil(totalProducts / limit);

		res.render("pages/catalogue", {
			products,
			currentPage: page,
			totalPages,
			totalProducts,
		});
	} catch (error) {
		next(new AppError("Erreur lors de la récupération des produits (DB)", 500));
	}
}

async function getProductById(req, res, next) {
	try {
		const { productId } = req.params;

		if (!Number.isInteger(Number(productId))) {
			return next(new AppError("ID de produit invalide", 400));
		}

		const product = await productModel.getProductById(productId);

		if (!product) {
			return next(new AppError("Produit non trouvé", 404));
		}

		res.render("pages/product-detail", { product });
	} catch (error) {
		next(new AppError("Erreur lors de la récupération du produit (DB)", 500));
	}
}

async function createProduct(req, res, next) {
	try {
		const newProduct = await productModel.createProduct(req.body);
		res.status(201).json(newProduct);
	} catch (error) {
		next(
			error.message.startsWith("Validation error")
				? new AppError(error.message, 400)
				: error,
		);
	}
}

async function updateProduct(req, res, next) {
	try {
		const { productId } = req.params;
		const updatedProduct = await productModel.updateProduct(
			productId,
			req.body,
		);

		if (!updatedProduct) {
			throw new AppError("Produit non trouvé", 404);
		}

		res.json(updatedProduct);
	} catch (error) {
		next(
			error.message.startsWith("Validation error")
				? new AppError(error.message, 400)
				: error,
		);
	}
}

async function deleteProduct(req, res, next) {
	try {
		const { productId } = req.params;
		const result = await productModel.deleteProduct(productId);

		if (!result) {
			throw new AppError("Produit non trouvé", 404);
		}

		res.json({ message: "Produit supprimé avec succès" });
	} catch (error) {
		next(new AppError("Erreur lors de la suppression du produit (DB)", 500));
	}
}

module.exports = {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};
