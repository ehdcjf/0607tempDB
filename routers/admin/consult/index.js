const express = require('express');
const router = express.Router();
const boardController = require('../board/board.controller');
const consultController = require('./consult.controller');


router.get('/list', boardController.show_list);
router.get('/view',boardController.show_article);
router.get('/destroy',boardController.destroy_article); 
router.get('/faq_write',consultController.write_faq); 
router.get('/faq_modify',consultController.modify_faq); 
router.post('/faq_modify',consultController.update_faq); 
router.post('/faq_write',consultController.create_faq); 

// router.get('', boardController.);





module.exports = router;