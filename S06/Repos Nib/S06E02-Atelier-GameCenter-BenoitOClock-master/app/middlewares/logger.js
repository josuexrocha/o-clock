const dayjs = require("dayjs");

const logger = (request, response, next) => {
  // on met en place un gestionnaire d'évènement qui executera la callback
  // à la fiun du cycle de vie de la requête, ce qui nous permet de journaliser
  // le bon code de status de la réponse.
  request.on("end", () => {
    console.log(
      `${response.statusCode} - ${dayjs().toISOString()} ${request.ip} ${
        request.method
      } ${request.url}`
    );
  });
  next();
};

module.exports = logger;
