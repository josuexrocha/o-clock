// routes/index.js
const homeController = require("../controllers/homeController");
const productController = require("../controllers/productController");
const contactController = require("../controllers/contactController");
const productRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const cartRoutes = require("./cartRoutes");

module.exports = (app) => {
	// Route pour afficher la page d'accueil
	app.get("/", homeController.getHomepage);

	// Routes pour gérer les produits
	app.use("/catalogue", productRoutes);

	// Route pour afficher le détail d'un produit
	app.get("/product/:productId", productController.getProductById);

	// Routes pour l'authentification (login, register, logout)
	app.use("/auth", authRoutes);

	// Routes pour le profil utilisateur
	app.use("/", userRoutes);

	// Route pour la page de contact
	app.get("/contact", contactController.getContactPage);

	// Routes pour le panier
	app.use("/cart", cartRoutes);
};
