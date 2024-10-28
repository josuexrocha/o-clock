// src/middlewares/errorMiddleware.js
const errorHandler = require('../helpers/errorHandler');

module.exports = (err, req, res, next) => {
  errorHandler.handleServerError(res, err);
};