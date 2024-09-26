const expressLight = require("./expressLight");

const server = expressLight();

console.log(
  "le tableau contenant les MW, avant l'utilisation de use ou de get"
);
console.log(server.middlewares);

server.use((request, response, next) => {
  response.setHeader("Content-Type", "text/html;charset=utf-8");
  next();
});

server.use((request, response, next) => {
  response.write("Bienvenue ");
  next();
});

server.get("/", (request, response, next) => {
  response.write("sur la homepage");
  next();
});

server.get("/about", (request, response, next) => {
  response.write("sur la page à propos");
  next();
});

server.use((request, response, next) => {
  response.end();
  next();
});

console.log("le tableau contenant les MW, après initialisation du server");
console.log(server.middlewares);

server.listen(4000);
