// src/controllers/userController.js
const bcrypt = require('bcrypt');
const User = require('../models/User');
const errorHandler = require('../helpers/errorHandler');

const userController = {
  renderSignupPage: (req, res) => {
    res.render('signup');
  },

  renderLoginPage: (req, res) => {
    res.render('login', { message: req.query.message });
  },

  signup: async (req, res) => {
    try {
      const { firstname, lastname, email, password, confirmation } = req.body;
      if (!firstname || !lastname || !email || !password || !confirmation) {
        return errorHandler.handleClientError(res, 'Tous les champs sont requis.');
      }
      if (password !== confirmation) {
        return errorHandler.handleClientError(res, 'Les mots de passe ne correspondent pas.');
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({ firstname, lastname, email, password: hashedPassword });
      res.redirect('/login?message=Inscription réussie. Veuillez vous connecter.');
    } catch (error) {
      errorHandler.handleServerError(res, error, "Erreur lors de l'inscription");
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return errorHandler.handleClientError(res, 'Email et mot de passe sont requis.');
      }
      const user = await User.findOne({ where: { email } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return errorHandler.handleClientError(res, 'Email ou mot de passe incorrect.');
      }
      req.session.userId = user.id;
      res.redirect('/?message=Connexion réussie');
    } catch (error) {
      errorHandler.handleServerError(res, error, "Erreur lors de la connexion");
    }
  },

  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        errorHandler.handleServerError(res, err, "Erreur lors de la déconnexion");
      } else {
        res.redirect('/?message=Vous avez été déconnecté');
      }
    });
  },

  renderProfilePage: async (req, res) => {
    try {
      const user = await User.findByPk(req.session.userId);
      if (!user) {
        return res.redirect('/login');
      }
      res.render('profile', { user });
    } catch (error) {
      errorHandler.handleServerError(res, error, "Erreur lors du chargement du profil");
    }
  },

  renderAdminPage: (req, res) => {
    res.render('admin');
  }
};

module.exports = userController;