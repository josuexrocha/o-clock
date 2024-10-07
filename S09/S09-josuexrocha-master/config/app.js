// config/app.js

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("node:path");
const session = require("express-session");
const sessionLocals = require("../middlewares/sessionLocals");
const pgSession = require("connect-pg-simple")(session);
const pool = require("./db");

module.exports = (app) => {
  // Sécurité avec Helmet
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
          imgSrc: ["'self'", "data:", "https:", "blob:"],
          connectSrc: ["'self'", "https://localhost:3000"],
          fontSrc: ["'self'", "https://fonts.gstatic.com", "https:", "data:"],
          objectSrc: ["'none'"],
          upgradeInsecureRequests: [],
        },
      },
      referrerPolicy: { policy: "strict-origin-when-cross-origin" },
      hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
      noSniff: true,
      xssFilter: true,
      frameguard: { action: "deny" },
      crossOriginResourcePolicy: { policy: "same-origin" }, // Protection supplémentaire contre les attaques
    })
  );

  // Configuration CORS pour permettre les requêtes depuis le frontend
  app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

  // Middlewares pour analyser les requêtes et servir les fichiers statiques
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Configurations EJS et vues
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../views"));

  app.use(
    express.static(path.join(__dirname, "../public"), {
      dotfiles: "ignore",
      etag: false,
      extensions: ["htm", "html"],
      index: false,
      maxAge: "1d",
      redirect: false,
      setHeaders: (res, path) => {
        res.set("x-timestamp", Date.now());
        if (path.endsWith(".js")) {
          res.set("Content-Type", "application/javascript");
        }
      },
    })
  );

  // Configuration de la session avec PostgreSQL
  const sessionConfig = {
    store: new pgSession({ pool: pool, tableName: "session" }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 jour
      sameSite: "lax",
    },
  };

  if (app.get("env") === "production") {
    app.set("trust proxy", 1);
    sessionConfig.cookie.secure = true; // Garantit l'utilisation de cookies sécurisés
  }

  // Utilisation des sessions et des middlewares locaux
  app.use(session(sessionConfig));
  app.use(sessionLocals);
};
