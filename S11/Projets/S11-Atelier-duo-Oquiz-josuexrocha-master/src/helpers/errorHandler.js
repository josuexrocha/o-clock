// src/helpers/errorHandler.js

const errorHandler = {
  handleServerError(res, error, customMessage = 'Une erreur serveur sauvage est apparue...') {
    console.error(error);
    res.status(500).render('500', { message: customMessage });
  },

  handleNotFound(res, message = 'Oupsy ! Tu es perdu ?') {
    res.status(404).render('404', { message });
  },

  handleClientError(res, message = 'Oups ! Quelque chose ne va pas avec cette requête.') {
    res.status(400).render('400', { message });
  },

  handleMiddlewareError(error, req, res, next) {
    console.error('Middleware error:', error);
    if (res.headersSent) {
      return next(error);
    }
    res.status(500).render('500', { message: 'Une erreur est survenue lors du traitement de votre requête.' });
  }
};

module.exports = errorHandler;
