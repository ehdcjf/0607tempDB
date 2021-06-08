const express = require('express');
const router = express.Router();
const mainController = require('./main.controller')

router.get('/', mainController.main);
router.get('/visual',mainController.main); 
router.get('/curr',mainController.get_curr);
router.get('/review',mainController.get_review);
router.get('/popup',mainController.get_popup); 




module.exports = router;