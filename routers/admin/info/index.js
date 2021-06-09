const express = require('express');
const router = express.Router();
const infoController = require('./info.controller')
const boardController = require('../board/board.controller')
const multer = require('multer'); //npm install multer
const path = require('path'); //npm install path

/* 가져다쓰기 외우기 */
const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,callback){
            callback(null,'uploads')//폴더명
        },
        filename:function(req,file,callback){
            callback(null,new Date().valueOf()+ path.extname(file.originalname))
        } //path.extname(file.originalname)): 확장자 가져오는 코드
    }),
})


router.get('/view', boardController.show_article);
router.get('/modify', boardController.show_modify);
router.post('/modify', boardController.modify_article);
router.get('/list',boardController.show_list);

router.get('/history', infoController.get_history);
router.post('/dlthistory', infoController.dlt_history);
router.post('/updatehistory',infoController.update_history);
router.post('/addhistory', infoController.add_history);

router.get('/interior_add',infoController.interior_add); 
router.post('/interior_add',upload.single('img'),infoController.create_interior); 

router.get('/teachers',infoController.get_teacher);
router.get('/teacher/add', infoController.add_teacher);
router.post('/create_teacher',upload.single('img'),infoController.create_teacher);
router.get('/teacher/modify',infoController.modify_teacher)
router.post('/teacher/modify',upload.single('img'),infoController.update_teacher)
router.get('/teacher/destroy',infoController.destroy_teacher)




module.exports = router;