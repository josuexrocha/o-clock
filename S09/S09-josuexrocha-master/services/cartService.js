// services/cartService.js
const Cart = require("../models/cartModel");
const { AppError } = require("../helpers/errorHelpers");

const CartService = {
	async getCartForUser(userId) {
		const cartItems = await Cart.getCart(userId);
		const cartTotal = cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0,
		);
		return { cartItems, cartTotal };
	},

	async addItemToCart(userId, productId, quantity) {
		// Validation des paramètres
		if (
			!productId ||
			!quantity ||
			Number.isNaN(productId) ||
			Number.isNaN(quantity) ||
			quantity <= 0
		) {
			throw new AppError(
				"Le productId et une quantité valide sont requis",
				400,
			);
		}
		await Cart.addItem(userId, productId, quantity);
	},

	async updateCartItem(userId, productId, quantity) {
		// Validation des paramètres
		if (
			!productId ||
			!quantity ||
			Number.isNaN(productId) ||
			Number.isNaN(quantity) ||
			quantity <= 0
		) {
			throw new AppError(
				"Le productId et une quantité valide sont requis",
				400,
			);
		}
		await Cart.updateItem(userId, productId, quantity);
	},

	async removeItemFromCart(userId, productId) {
		// Validation des paramètres
		if (!productId || Number.isNaN(productId)) {
			throw new AppError("Un productId valide est requis", 400);
		}
		await Cart.removeItem(userId, productId);
	},

	async clearUserCart(userId) {
		await Cart.clearCart(userId);
	},
};

module.exports = CartService;
