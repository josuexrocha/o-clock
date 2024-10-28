// src/middlewares/middlewares.js
const notFoundMiddleware = require("./notFoundMiddleware");
const adminMiddleware = require("./adminMiddleware");
const authMiddleware = require("./authMiddleware");
const permissionMiddleware = require("./permissionMiddleware");
const flashMiddleware = require("./flashMiddleware");
const errorMiddleware = require("./errorMiddleware");

module.exports = {
  notFoundMiddleware,
  adminMiddleware,
  authMiddleware,
  permissionMiddleware,
  flashMiddleware,
  errorMiddleware
};