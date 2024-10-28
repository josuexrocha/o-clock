// src/middlewares/adminMiddleware.js
const User = require('../models/User');  // Utilisez cette ligne

module.exports = async (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  const user = await User.findByPk(req.session.userId);
  if (user && user.role === 'admin') {
    next();
  } else {
    res.status(403).send('Accès refusé');
  }
};