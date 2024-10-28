// src/controllers/levelController.js
const Level = require("../models/Level");
const errorHandler = require("../helpers/errorHandler");

const levelController = {
  renderLevelsPage: async (req, res) => {
    try {
      const levels = await Level.findAll();
      let message = req.query.message;
      res.render("levels", { levels, message });
    } catch (error) {
      errorHandler.handleServerError(res, error, "Erreur lors du chargement des niveaux");
    }
  },

  deleteLevelAction: async (req, res) => {
    const levelId = parseInt(req.params.id, 10);
    try {
      const level = await Level.findByPk(levelId);
      if (!level) {
        return errorHandler.handleNotFound(res, "Niveau non trouvé");
      }
      await level.destroy();
      res.redirect('/levels?message=' + encodeURI("Difficulté supprimée"));
    } catch (error) {
      errorHandler.handleServerError(res, error, "Impossible de supprimer le niveau");
    }
  },

  renderAdminLevelsPage: async (req, res) => {
    try {
      const levels = await Level.findAll();
      res.render("admin/levels", { levels });
    } catch (error) {
      errorHandler.handleServerError(res, error, "Erreur lors du chargement des niveaux");
    }
  },

  addLevel: async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        return errorHandler.handleClientError(res, "Le nom du niveau est requis");
      }
      await Level.create({ name });
      res.redirect('/admin/levels?message=' + encodeURI("Niveau ajouté avec succès"));
    } catch (error) {
      errorHandler.handleServerError(res, error, "Impossible d'ajouter le niveau");
    }
  },

  editLevel: async (req, res) => {
    const levelId = parseInt(req.params.id, 10);
    try {
      const level = await Level.findByPk(levelId);
      if (!level) {
        return errorHandler.handleNotFound(res, "Niveau non trouvé");
      }
      const { name } = req.body;
      if (!name) {
        return errorHandler.handleClientError(res, "Le nom du niveau est requis");
      }
      await level.update({ name });
      res.redirect('/admin/levels?message=' + encodeURI("Niveau modifié avec succès"));
    } catch (error) {
      errorHandler.handleServerError(res, error, "Impossible de modifier le niveau");
    }
  }
};

module.exports = levelController;