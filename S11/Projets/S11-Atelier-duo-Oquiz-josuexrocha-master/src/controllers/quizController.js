// src/controllers/quizController.js

const Quiz = require("../models/Quiz");
const Tag = require("../models/Tag");
const Question = require("../models/Question");
const Level = require("../models/Level");
const Answer = require("../models/Answer");
const User = require("../models/User");
const errorHandler = require("../helpers/errorHandler");

const quizController = {
  renderQuizPage: async (req, res) => {
    try {
      const quizId = req.params.id;
      const quiz = await Quiz.findByPk(quizId, {
        include: [
          {
            model: User,
            as: 'author',
            attributes: ['firstname', 'lastname']
          },
          { model: Tag },
          {
            model: Question,
            include: [
              { model: Level, attributes: ['name'] },
              { model: Answer }
            ]
          }
        ]
      });
      if (!quiz) {
        return errorHandler.handleNotFound(res, "Quiz non trouvé");
      }
      res.render("quiz", { quiz: quiz.toJSON() });
    } catch (error) {
      errorHandler.handleServerError(res, error, "Erreur lors du chargement du quiz");
    }
  }
};

module.exports = quizController;