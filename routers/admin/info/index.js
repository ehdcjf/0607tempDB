const express = require('express');
const router = express.Router();
const infoController = require('./info.controller')

router.get('/intro', infoController.get_intro);
router.get('/history',infoController.get_history); 
router.get('/teachers',infoController.get_teachers);
router.get('/interior',infoController.get_interior);
router.get('/location',infoController.get_loc); 




module.exports = router;