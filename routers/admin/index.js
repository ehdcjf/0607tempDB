const express = require('express');
const router = express.Router();
const introController = require('./intro.controller')
const mainController = require('./main.controller')

router.get('/introduction', introController.get_intro);
router.post('/updateintro', introController.update_intro)
router.get('/main', mainController.main);

module.exports = router;