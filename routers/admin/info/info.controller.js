const {board,teacher,history} = require("../../../models")

let get_history = async(req,res)=>{ 
  let result = await history.findAll({
    order:[['year','ASC']]
  }); 
  let resultArr = []; 
  result.forEach(ele => {
    resultArr.push(ele.dataValues); 
  });
  res.render('./admin/info/history',{
    result:resultArr
  })
}


let add_history = async(req,res)=>{ 
  let { year, content } = req.body;
    await history.create({
    year,
    content, 
  }); 

  
  res.redirect('/admin/info/history')
}  



let dlt_history = async(req,res)=>{ 
  let {id} = req.body; 

  await history.destroy({
    where:{id,}
  })

  let result = await history.findAll({
    order:[['year','ASC']]
  })
  let resultArr = []; 
  result.forEach(ele => {
    resultArr.push(ele.dataValues); 
  });
  res.render('./admin/info/history',{
    result:resultArr,
  }); 
}

let update_history = async(req,res)=>{ 
  let {id,year,content} = req.body; 

  let result = await history.update({ 
    year,
    content,
  },{
    where:{id,}
  });

  res.json({flag:result[0]}); 
}


let get_teacher = async(req,res)=>{ 
  let result = await teacher.findAll({
  }); 
  let resultArr = []; 
  result.forEach(ele => {
    resultArr.push(ele.dataValues); 
  });
  res.render('./admin/info/teacher',{
    result:resultArr
  })
}

let add_teacher = (req,res)=>{ 
  res.render('./admin/info/teacher_add'); 
}

let create_teacher = async(req,res)=>{ 
  console.log(req.body); 
  let {name,position,title,career,content} = req.body 
  let image = req.file.filename; 
  let result = await teacher.create({ 
    name,position,title,career,content,image,
  })
  res.redirect('/admin/info/teachers')
}

let modify_teacher = async(req,res)=>{
 
  let {id} = req.query; 
  let result = await teacher.findOne({
    where:{id,}
  })

  result = result.dataValues; 

  res.render('./admin/info/teacher_modify.html',{
    result,
  })
}

let update_teacher = async (req,res)=>{
  console.log(req.body); 
  console.log(req.file); 
  let {name,position,title,career,content,id} = req.body 
  let image; 
  if(req.file==undefined){ 
    image = req.body.origin_image; 
  }else{
    image= req.file.filename; 
  }

  let result = await teacher.update({
    name,position,title,career,content,image,
  },{
    where:{id,}
  })

  res.redirect('/admin/info/teachers'); 
}

let destroy_teacher = async(req,res)=>{
  let {id} = req.query; 

  let result = await teacher.destroy({
    where:{id,}
  })
  res.redirect('/admin/info/teachers'); 
}

let interior_add = (req,res)=>{ 
  res.render('./admin/info/interior_add'); 
}


let create_interior = async(req,res)=>{ 
  let subject = "시설소개"
  let content =req.file.filename; 
  let writer = "관리자"
  let type = "2"

  let result = await board.create({
    writer, subject, content, type
  });

  res.redirect('/admin/info/list?type=2'); 
}

module.exports = {
  interior_add ,create_interior,
  get_teacher, add_teacher, create_teacher,modify_teacher ,destroy_teacher,update_teacher,
  get_history,add_history,dlt_history,update_history,

}

