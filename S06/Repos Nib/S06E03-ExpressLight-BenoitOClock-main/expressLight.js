const http = require("node:http");

function expressLight() {
  // on crée un serveur http
  const server = http.createServer();

  // on ajoute 4 propriétés à l'objet qui représente le serveur
  server.middlewares = []; // un tableau pour stocker les MW
  server.index = 0; // un index pour garder trace de notre posotion dans le tableau des MW
  server.input = {}; // un objet qui représentera notre requête
  server.output = {}; // un objet qui représentera notre réponse

  // on ajoute au serveur une méthode use qui ajoute simplement le mw qu'on lui transmet dans le tableau des mw.
  server.use = function (mw) {
    server.middlewares.push(mw);
  };

  // on crée une méthode get qui ajoute un mw qui conditionne l'execution du mw reçu par la fonction à la reception d'une requête
  // utilisant la méthode GET et à un chemin particulier
  server.get = function (path, mw) {
    const mwWithRouteCondition = function (request, response, next) {
      // si méthode et chemin sont corrects
      if (server.input.url === path && server.input.method === "GET") {
        // on execute le mw
        mw(request, response, next);
      } else {
        // sinon on appelle next()
        next();
      }
    };
    // on ajoute le mw que l'on vient de fabriquer dans le tableau des mw.
    server.middlewares.push(mwWithRouteCondition);
  };

  // La fonction next permet de dire à notre server d'exécuter le prochain mw stocké dans le tableau
  const next = function () {
    // on ajoute un à l'index
    server.index++;
    console.log(`Le serveur recherche le mw ${server.index}`);
    // on récupére le mw stocké dans le tableau à l'index 'server.index'
    const nextMW = server.middlewares[server.index];
    // si on a bien récupérer une valeur
    if (nextMW) {
      console.log(`Le serveur execute le mw ${server.index}`);
      // on execute le mw récupérer
      nextMW(server.input, server.output, next);
    } else {
      // on avait attei,t le dernier mw du tableau, le cycle de vie de notre requete prend fin.
      console.log(`le mw ${server.index} n'existe pas`);
    }
  };

  // on ajoute un gestionnaire d'évènement au serveur, qui sera execué à la réception d'un nouvelle requête
  server.on("request", function (request, response) {
    console.log("Le serveur vient de recevoir une nouvelle requête");

    server.index = 0; // on remet l'index à 0 (il va de nouveau falloir travserver le tableau des mw depuis le début)
    server.input = request; // on défini la propriété input du server en lui assignant la requête reçue
    server.output = response; // on défini la propriété output du server en lui assignant la réponse à envoyer

    // on récupère le premier mw du tableau
    const firstMW = server.middlewares[server.index];
    console.log("Le serveur execute le premier middleware");
    // on execute le mw récupéré
    firstMW(server.input, server.output, next);
  });

  // on renvoie le serveur http que nous venons de créer
  return server;
}

module.exports = expressLight;
