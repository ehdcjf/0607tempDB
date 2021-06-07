const express = require('express');
const router = express.Router();
const introController = require('./intro.controller')
const historyController = require('./history.controller')
const mainController = require('./main.controller')
const teacherController = require('./teacher.controller')
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



router.get('/main', mainController.main);
router.get('/introduction', introController.get_intro);
router.get('/history', historyController.get_history);
router.get('/teacher', teacherController.get_teacher);
router.get('/addteacher', teacherController.add_teacher);
router.post('/create_teacher',upload.single('img'),teacherController.create_teacher);
router.post('/dlthistory', historyController.dlt_history);
router.post('/updateintro', introController.update_intro);
router.post('/updatehistory',historyController.update_history);
router.post('/addhistory', historyController.add_history);

module.exports = router;