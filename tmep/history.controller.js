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
  teacher, } = require('../models'); 


let get_history = async(req,res)=>{ 
  let result = await history.findAll({
    order:[['year','ASC']]
  }); 
  let resultArr = []; 
  result.forEach(ele => {
    resultArr.push(ele.dataValues); 
  });
  res.render('./admin/history',{
    result:resultArr
  })
}


let add_history = async(req,res)=>{ 
  let { year, content } = req.body;
    await history.create({
    year,
    content, 
  }); 

  
  res.redirect('/admin/history')
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
  res.render('./admin/history',{
    result:resultArr,
  }); 

}

let update_history = async(req,res)=>{ 
  let {id,year,content} = req.body; 
  console.log(req.body); 

  let result = await history.update({ 
    year,
    content,
  },{
    where:{id,}
  });

  res.json({flag:result[0]}); 
}





module.exports = {
  get_history,add_history,dlt_history,update_history,

}