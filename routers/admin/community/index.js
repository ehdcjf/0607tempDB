const express = require('express');
const router = express.Router();
const boardController = require('../board/board.controller')


router.get('/list', boardController.show_list);
router.get('/write', boardController.show_editor);
router.post('/write',boardController.make_article);
router.get('/view',boardController.show_article);
router.get('/destroy',boardController.destroy_article); 
router.get('/modify',boardController.show_modify); 
router.post('/modify',boardController.modify_article); 
// router.get('', boardController.);





module.exports = router;