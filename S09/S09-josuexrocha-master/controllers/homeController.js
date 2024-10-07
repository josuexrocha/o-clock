// controllers/homeController.js

const productModel = require('../models/productModel');
const { AppError } = require('../helpers/errorHelpers');

async function getHomepage(req, res, next) {
  try {
    const products = await productModel.getAllProducts(3); // Récupère les 3 derniers produits
    res.render('pages/home', { products });
  } catch (error) {
    next(new AppError("Erreur lors du chargement de la page d'accueil (DB)", 500));
  }
}

module.exports = {
  getHomepage
};
