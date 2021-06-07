const { board,
  board_image,
  consult,
  curr_faq,
  curr_sbj,
  curriculum,
  history,
  sboard,
  sboard_image,
  subject,
  teacher, } = require('../../models')

let get_intro = async (req, res) => {
  let result = await board.findOne({
    where: { type: '0' }
  })
  res.render('./admin/introduction', {
    subject: result.dataValues.subject,
    content: result.dataValues.content,
  })
}

let update_intro = async (req, res) => {
  console.log("인사말 업데이트");
  console.log(req.body);
  let { subject, content } = req.body;
  let result = await board.update({
    subject,
    content,
  }, {
    where: { type: '0' }
  });
  console.log(result);
  if (result[0] == 1) {
    // //수정 성공
    // let result2 = await board.findOne({
    //   where: { type: '0' }
    // })
    // res.render('./admin/introduction', {
    //   subject: result2.dataValues.subject,
    //   content: result2.dataValues.content,
    // })
    res.redirect('/admin/main'); 
    

  } else {
    //수정실패
    res.redirect('/admin/introduction'); 
  }
}



module.exports = {
  get_intro, update_intro,

}