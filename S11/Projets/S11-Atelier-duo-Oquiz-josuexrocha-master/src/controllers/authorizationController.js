// src/controllers/authorizationController.js
const { User, Role } = require('../models');
const errorHandler = require('../helpers/errorHandler');

const authorizationController = {
  checkPermission: async (userId, requiredPermission) => {
    try {
      const user = await User.findByPk(userId, { include: Role });
      return user && (user.Role.permissions[requiredPermission] || user.permissions[requiredPermission]);
    } catch (error) {
      console.error('Erreur lors de la vérification des permissions:', error);
      return false;
    }
  },

  assignRole: async (req, res) => {
    try {
      const { userId, roleId } = req.body;
      const user = await User.findByPk(userId);
      const role = await Role.findByPk(roleId);
      if (user && role) {
        await user.setRole(role);
        res.redirect('/admin/users');
      } else {
        errorHandler.handleClientError(res, "Utilisateur ou rôle non trouvé");
      }
    } catch (error) {
      errorHandler.handleServerError(res, error, "Erreur lors de l'attribution du rôle");
    }
  },

  getUserPermissions: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findByPk(userId, { include: Role });
      if (user) {
        res.json({
          rolePermissions: user.Role.permissions,
          userPermissions: user.permissions
        });
      }
    } catch (error) {
      errorHandler.handleServerError(res, error, "Erreur lors de la récupération des permissions");
    }
  }
};

module.exports = authorizationController;