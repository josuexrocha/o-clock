const { AppError } = require("../helpers/errorHelpers");

async function getProfile(req, res, next) {
  try {
    const user = {
      firstName: req.session.firstName,
      lastName: req.session.lastName,
      email: req.session.email,
    };

    res.render("pages/profile", { user });
  } catch (error) {
    next(new AppError("Erreur lors de la récupération du profil (DB)", 500));
  }
}

module.exports = {
  getProfile,
};
