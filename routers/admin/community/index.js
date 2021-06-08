const express = require('express');
const router = express.Router();
const boardController = require('../board/board.controller')

router.get('/list', boardController.show_list);
router.get('/write', boardController.show_editor);
// router.get('', boardController.);





module.exports = router;