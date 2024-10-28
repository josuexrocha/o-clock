// src/controllers/tagController.js

const Tag = require("../models/Tag");
const Quiz = require("../models/Quiz");
const errorHandler = require("../helpers/errorHandler");

const tagController = {
  renderTagPage: async (req, res) => {
    try {
      const tags = await Tag.findAll({
        include: [{ model: Quiz }]
      });
      res.render("tags", { tags });
    } catch (error) {
      errorHandler.handleServerError(res, error, "Erreur lors du chargement des tags");
    }
  }
};

module.exports = tagController;