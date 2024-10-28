// src/routes/index.js
const express = require('express');
const router = express.Router();

// Controllers
const mainController = require('../controllers/mainController');
const levelController = require('../controllers/levelController');
const quizController = require('../controllers/quizController');
const tagController = require('../controllers/tagController');
const userController = require('../controllers/userController');
const authorizationController = require('../controllers/authorizationController');

// Middlewares
const { adminMiddleware, authMiddleware, permissionMiddleware } = require('../middlewares/middlewares');

// Routes publiques
router.get('/', mainController.renderHomePage);
router.get('/levels', levelController.renderLevelsPage);
router.get('/quiz/:id', quizController.renderQuizPage);
router.get('/tags', tagController.renderTagPage);

// Routes d'authentification
router.get('/signup', userController.renderSignupPage);
router.post('/signup', userController.signup);
router.get('/login', userController.renderLoginPage);
router.post('/login', userController.login);
router.get('/logout', userController.logout);

// Routes protégées (nécessitant une authentification)
router.get('/profile', authMiddleware, userController.renderProfilePage);

// Routes admin
const adminRouter = express.Router();
adminRouter.use(adminMiddleware);
adminRouter.get('/', permissionMiddleware('access_admin_panel'), userController.renderAdminPage);
adminRouter.get('/levels', permissionMiddleware('manage_levels'), levelController.renderAdminLevelsPage);
adminRouter.post('/levels/add', permissionMiddleware('manage_levels'), levelController.addLevel);
adminRouter.post('/levels/:id/edit', permissionMiddleware('manage_levels'), levelController.editLevel);
adminRouter.get('/levels/:id/delete', permissionMiddleware('manage_levels'), levelController.deleteLevelAction);

// Nouvelles routes pour la gestion des rôles et permissions
adminRouter.post('/assign-role', permissionMiddleware('manage_roles'), authorizationController.assignRole);
adminRouter.get('/user-permissions/:userId', permissionMiddleware('view_permissions'), authorizationController.getUserPermissions);

router.use('/admin', adminRouter);

module.exports = router;