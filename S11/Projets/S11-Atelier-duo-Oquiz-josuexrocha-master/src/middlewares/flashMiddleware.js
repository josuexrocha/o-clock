// src/middlewares/flashMiddleware.js
module.exports = (req, res, next) => {
    res.locals.message = req.query.message || req.session.message;
    delete req.session.message;
    next();
  };