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
  teacher, } = require('../../models'); 


let get_teacher = async(req,res)=>{ 
  let result = await teacher.findAll({
  }); 
  let resultArr = []; 
  result.forEach(ele => {
    resultArr.push(ele.dataValues); 
  });
  res.render('./admin/teacher_show',{
    result:resultArr
  })
}

let add_teacher = (req,res)=>{ 
  res.render('./admin/teacher_create'); 
}

let create_teacher = async(req,res)=>{ 
  console.log(req.body); 
  let {name,position,title,career,content} = req.body 
  let img = req.file.filename; 
  let result = await teacher.create({ 
    name,position,title,career,content,img,
  })
  console.log(result);
  res.redirect('/admin/teacher')
}


module.exports = {
  get_teacher, add_teacher, create_teacher,

}