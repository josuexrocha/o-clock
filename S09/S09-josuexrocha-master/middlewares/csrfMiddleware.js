// middlewares/csrfMiddleware.js
const csrf = require('csurf');

// Protection CSRF utilisant des cookies
const csrfProtection = csrf({ cookie: true });

module.exports = csrfProtection;
