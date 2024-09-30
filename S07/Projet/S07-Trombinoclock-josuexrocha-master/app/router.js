const express = require("express");
const router = express.Router();
const mainController = require("./controllers/mainController");
const promoController = require("./controllers/promoController");
const adminController = require("./controllers/adminController");

// Routes principales
router.get("/", mainController.home);

// Déclaration des routes liées aux promos
router.get("/promotions", promoController.promosList);
router.get("/promotions/:id", promoController.promoInfos);
router.get('/promotions/:id/students', promoController.listStudents);

// Route pour ajouter un étudiant
router.get("/admin/addStudent", adminController.addStudentForm);
router.post("/admin/addStudent", adminController.addStudent);

module.exports = router;
