// controllers/contactController.js

const { AppError } = require('../helpers/errorHelpers');

function getContactPage(req, res, next) {
  try {
    res.render('pages/contact', {
      req
    });
  } catch (error) {
    next(new AppError('Erreur lors du chargement de la page de contact', 500));
  }
}


module.exports = { getContactPage };