// controllers/productController.js

const productModel = require("../models/productModel");
const { AppError } = require("../helpers/errorHelpers");

async function getAllProducts(req, res, next) {
	try {
		const characteristic = req.query.characteristic || "all";
		const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : 100;
		const sortOrder = req.query.sortOrder || "asc";
		const showLatest = req.query.showLatest || "all";
		const page = Number.parseInt(req.query.page) || 1;
		const limit = 6; // Ou le nombre que vous avez défini
		const offset = (page - 1) * limit;

		console.log("Page:", page, "Limit:", limit, "Offset:", offset);
		console.log("Appel à getFilteredProducts avec les paramètres :", {
			characteristic,
			maxPrice,
			sortOrder,
			showLatest,
			limit,
			offset,
		});

		// Récupérer les produits en fonction des filtres et pagination
		const products = await productModel.getFilteredProducts({
			characteristic,
			maxPrice,
			sortOrder,
			showLatest,
			limit,
			offset,
		});

		// Récupérer le nombre total de produits filtrés
		const totalProducts = await productModel.getFilteredProductsCount({
			characteristic,
			maxPrice,
		});

		const totalPages = Math.ceil(totalProducts / limit);

		if (req.xhr || req.headers.accept.indexOf("json") > -1) {
			return res.status(200).json({
				products,
				currentPage: page,
				totalPages,
			});
		}

		res.render("pages/catalogue", {
			products,
			currentPage: page,
			totalPages,
			totalProducts,
			req,
		});
	} catch (error) {
		console.error("Erreur lors de la récupération des produits : ", error);
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

		res.render("pages/product-detail", { product, req });
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
