// config/sessionSetup.js

const db = require("./db");

// Fonction pour vérifier/créer la table de session dans PostgreSQL
async function setupSessionTable() {
  try {
    // Vérifie si la table de session existe
    const tableCheck = await db.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public'
        AND table_name = 'session'
      );
    `);

    if (!tableCheck.rows[0].exists) {
      // Création de la table de session si elle n'existe pas
      await db.query(`
        CREATE TABLE "session" (
          "sid" varchar NOT NULL COLLATE "default",
          "sess" json NOT NULL,
          "expire" timestamp(6) NOT NULL
        );
        ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid");
        CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "session" ("expire");
      `);
      console.log("Table de session créée avec succès.");
    } else {
      console.log("La table de session existe déjà.");
    }
  } catch (err) {
    console.error("Erreur lors de la création de la table de session :", err);
  }
}

module.exports = setupSessionTable;
