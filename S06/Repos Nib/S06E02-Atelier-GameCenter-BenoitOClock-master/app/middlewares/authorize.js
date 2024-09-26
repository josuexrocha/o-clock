function authorize(request, response, next) {
  // si app.locals à bien une propriété user (cad si on est connecté)
  if (request.app.locals.user) {
    // on passe au mw suivant (celui qui va renvoyer la page demandée)
    next();
  } else {
    // sinon on redirige le client vers la page de connexion
    response.redirect("/signin");
  }
}

module.exports = authorize;
