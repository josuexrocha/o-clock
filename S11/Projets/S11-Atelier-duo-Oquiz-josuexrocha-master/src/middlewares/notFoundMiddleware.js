// src/middlewares/notFoundMiddleware.js
const notFoundMiddleware = (req, res) => {
  res.status(404).render('404', { message: "Oupsy ! Tu es perdu ?" });
};

module.exports = notFoundMiddleware;
