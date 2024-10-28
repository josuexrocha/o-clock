// src/controllers/mainController.js
const { Quiz, Tag, User } = require("../models");
const errorHandler = require("../helpers/errorHandler");

const mainController = {
  renderHomePage: async (req, res) => {
    try {
      let quizzes = await Quiz.findAll({
        include: [
          {
            model: User,
            as: 'author',
            attributes: ['firstname', 'lastname']
          },
          {
            model: Tag,
            through: { attributes: [] }
          }
        ]
      });
      quizzes = quizzes.sort(() => 0.5 - Math.random()).slice(0, 6);
      const message = req.query.message; // Récupérer le message de la query string
      res.render("home", { quizzes, message });
    } catch (error) {
      errorHandler.handleServerError(res, error, "Erreur lors du chargement de la page d'accueil");
    }
  }
};

module.exports = mainController;