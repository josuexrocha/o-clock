const express = require("express");
const port = 4000;

const app = express();

/*
  un MW express est une fonction qui reçoit 3 paramètres
  - request: un objet représentant la requête reçue
  - response: un objet représentant la réponse à renvoyer
  - next: une fonction dont l'exécution indique à l'application de passer au MW suivant

  Chacun des MW reçoit la requête et la réponse provenant du MW précédent.
  Si un premier MW modifie par exemple l'objet response, le MW suivant recevra cet objet modifié
*/

/*
 cette fonction renvoie une fonction qui est utilisée comme middleware
 exactement comme le fait la méthode express.static
*/
function logger(prefix) {
  return function (request, response, next) {
    console.log(`${prefix} ${request.method} ${request.url} ${request.ip}`);
    next();
  };
}

app.use(logger("->")); // le middleware qui est ajouté est la valeur renvoyée par l'exécution de la fonction logger
app.use(express.static("./public"));

/*
  L'execution des MW associés à des routes est conditionnée par la correspondance de la méthode et du chemin
  Le MW ci-dessous n'est executé si et seulement si la requête reçue est GET '/'
  Dans le cas contraire, express passe au MW suivant
*/
app.get("/", (request, response) => {
  response.send("Hello");
});

app.get("/mimirs", (request, response) => {
  response.send("Coucou les mimirs");
});

app.use((request, response) => {
  console.log(
    "Je suis le dernier MW. Je suis exécuté car la requête reçue ne correspondait à aucune route"
  );
});

app.listen(port, () => {
  console.log(`🚀 server ready: http://localhost:${port}`);
});
