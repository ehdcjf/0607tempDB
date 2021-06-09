const express = require('express');
const router = express.Router();
// const introController = require('./intro.controller')
// const historyController = require('../../../tmep/history.controller')
// const mainController = require('../main/main.controller')
// const teacherController = require('./teacher.controller')
// const boardController = require('./board.controller')
// const multer = require('multer'); //npm install multer
// const path = require('path'); //npm install path

// /* 가져다쓰기 외우기 */
// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,callback){
//             callback(null,'uploads')//폴더명
//         },
//         filename:function(req,file,callback){
//             callback(null,new Date().valueOf()+ path.extname(file.originalname))
//         } //path.extname(file.originalname)): 확장자 가져오는 코드
//     }),
// })



// // router.get('/', mainController.main);
// // router.get('/introduction', introController.get_intro);
// // router.post('/updateintro', introController.update_intro);

// // router.get('/history', historyController.get_history);
// // router.post('/dlthistory', historyController.dlt_history);
// // router.post('/updatehistory',historyController.update_history);
// // router.post('/addhistory', historyController.add_history);




// router.get('/board/list',boardController.show_list); 
// router.get('/board/write',boardController.show_editor); 
// router.post('/board/write',boardController.make_article); 
// router.get('/board/view',boardController.show_article); 
// router.get('/board/destroy',boardController.destroy_article); 
// router.get('/board/modify',boardController.show_modify); 
// router.post('/board/modify',boardController.modify_article); 

module.exports = router;