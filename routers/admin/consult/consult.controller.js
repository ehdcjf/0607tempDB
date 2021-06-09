const { board,
  board_image,
} = require('../../../models');


let write_faq = (req,res)=>{ 
  res.render('./admin/consult/faq_write'); 
}

let create_faq = async(req,res)=>{ 
  let {subject,content}=req.body; 
  let writer = "관리자"; 
  let type = '8'; 

  let result = await board.create({
    writer, subject, content, type
  })
  res.redirect(`/admin/consult/list?type=8`); 
}

let modify_faq = async(req,res)=>{ 
  let {id} = req.query; 

  let result = await board.findOne({
    where:{id,}
  })
  console.log(result); 
  res.render('./admin/consult/faq_modify',{
    result
  }); 
}


let update_faq = async(req,res)=>{ 
  let {subject,content,id} = req.body;
  let result = await board.update({
    subject, content
  }, {
    where: { id, },
  }); 
  res.redirect(`/admin/consult/list?type=8`); 
}


module.exports = {
 write_faq, create_faq ,modify_faq,update_faq

}