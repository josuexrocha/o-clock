// src/middlewares/permissionMiddleware.js
const authorizationController = require('../controllers/authorizationController');
const errorHandler = require('../helpers/errorHandler');

const permissionMiddleware = (requiredPermission) => {
  return async (req, res, next) => {
    if (!req.session.userId) {
      return res.redirect('/login');
    }
    const hasPermission = await authorizationController.checkPermission(req.session.userId, requiredPermission);
    if (hasPermission) {
      next();
    } else {
      errorHandler.handleClientError(res, 'Permission refusée');
    }
  };
};

module.exports = permissionMiddleware;