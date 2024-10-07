const CartService = require('../services/cartService');
const { AppError } = require('../helpers/errorHelpers');

async function getCart(req, res, next) {
  try {
    const cartData = await CartService.getCartForUser(req.session.userId);
    res.json(cartData);
  } catch (error) {
    next(error);
  }
}

async function addToCart(req, res, next) {
  try {
    const { productId, quantity } = req.body;
    await CartService.addItemToCart(req.session.userId, productId, quantity);
    res.json({ success: true, message: 'Produit ajouté au panier' });
  } catch (error) {
    next(error);
  }
}

async function updateCartItem(req, res, next) {
  try {
    const { productId, quantity } = req.body;
    await CartService.updateCartItem(req.session.userId, productId, quantity);
    res.json({ success: true, message: 'Quantité mise à jour' });
  } catch (error) {
    next(error);
  }
}

async function removeFromCart(req, res, next) {
  try {
    const { productId } = req.params;
    await CartService.removeItemFromCart(req.session.userId, productId);
    res.json({ success: true, message: 'Produit retiré du panier' });
  } catch (error) {
    next(error);
  }
}

async function clearCart(req, res, next) {
  try {
    await CartService.clearUserCart(req.session.userId);
    res.json({ success: true, message: 'Panier vidé avec succès' });
  } catch (error) {
    next(error);
  }
}

async function renderCartPage(req, res, next) {
  try {
    const cartData = await CartService.getCartForUser(req.session.userId);
    res.render('pages/cart', cartData);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  renderCartPage
};
