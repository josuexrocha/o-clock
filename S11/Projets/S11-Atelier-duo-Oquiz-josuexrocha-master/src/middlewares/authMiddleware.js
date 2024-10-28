// src/middlewares/authMiddleware.js
const { User } = require('../models');

module.exports = async (req, res, next) => {
  res.locals.user = null; // Initialisation par défaut

  if (req.session.userId) {
    try {
      const user = await User.findByPk(req.session.userId);
      if (user) {
        res.locals.user = {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          role: user.role
        };
      }
    } catch (error) {
      console.error('Error in auth middleware:', error);
    }
  }

  next();
};