// Load environnment variables from .env
require("dotenv/config");

// Import NPM modules
const express = require("express"); // Syntaxe CJS

// Import local modules
const router = require("./router");

// Create Express app
const app = express();

// Configure view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Configure assets routes (static folder)
app.use(express.static("./public"));

// Favicon static route
app.use("/favicon.ico", express.static("./public/images/logo.svg"));

// Plug routes on app
app.use(router);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 oCoffee app started at http://localhost:${port}`);
});
