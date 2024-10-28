const path = require('path');
const express = require("express");
const session = require('express-session');
const dotenv = require('dotenv');

// Chargement des variables d'environnement
dotenv.config({ path: path.join(__dirname, 'config', '.env') });

// Vérification des variables d'environnement critiques
const requiredEnvVars = ['SESSION_SECRET', 'DB_URI', 'PORT'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`${envVar} is not set in the environment variables`);
    process.exit(1);
  }
}

const authMiddleware = require("./src/middlewares/authMiddleware");
const middlewares = require("./src/middlewares/middlewares");
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const flashMiddleware = require('./src/middlewares/flashMiddleware');
const router = require("./src/routes");

const app = express();

// Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Configuration de la session
const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
};

// Utilisation d'un store de session différent en production
if (process.env.NODE_ENV === 'production') {
  // Uncomment and configure as needed
  // const Redis = require('ioredis');
  // const RedisStore = require('connect-redis')(session);
  // const redisClient = new Redis(process.env.REDIS_URL);
  // sessionConfig.store = new RedisStore({ client: redisClient });
}

app.use(session(sessionConfig));
app.use(flashMiddleware);
app.use(authMiddleware);

// Routes
app.use(router);

// Gestion des erreurs
app.use(middlewares.notFoundMiddleware);
app.use(errorMiddleware);

// Démarrage du serveur
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Gestion des erreurs non capturées
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application should not crash, but log the error and continue
});

// Gestion des exceptions non capturées
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Vous pouvez choisir de terminer le processus ici si nécessaire
  // process.exit(1);
});