const express = require('express');
const router = express.Router();
const boardController = require('../board/board.controller')

router.get('/intro', boardController.);
router.get('/history', boardController.);
router.get('/teachers', boardController.);
router.get('/interior', boardController.);
router.get('/location', boardController.);




module.exports = router;