const express = require('express');
const mainController = require('./controllers/main');

router = express.Router();

router.get('/', mainController.home);
router.get('/switch/:theme', mainController.switchTheme);


module.exports = router;