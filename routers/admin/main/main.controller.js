const {intro} = require("../../../models")


const intro_type = []; 
intro_type[0] ='intro_head'
intro_type[1] ='intro_content'
intro_type[2] ='location_image'
intro_type[3] ='location_content'
intro_type[4] ='interior'
intro_type[5] ='main_visual'
intro_type[6] ='popup'


let main = async(req, res) => {
  let result = await intro.findAll({
    attributes:['id','content','show']
  },{
    where:{type:'5'}, 
  })

  let resultArr = []; 
  result.forEach(ele => {
    resultArr.push(ele.dataValues); 
  });

  console.log(resultArr); 

  res.render('./admin/main/visual.html',{
    resultArr, 
  });
}

let add_mainv = (req,res)=>{
  res.render('./admin/main/visual_add.html'); 
}

let create_mainv = async(req,res)=>{
  let content = req.file.filename;
  let type = '5'; 
  await intro.create({
    content,type
  })

  res.redirect('/admin/main/'); 
}

let update_visual = async(req,res)=>{
  let {id,show} = req.body; 

  let result = await intro.update({
    show, 
  },{
    where:{id},
  }) 
  res.json({result}) 
}

let destroy_visual = async(req,res)=>{
  let {id} = req.body; 

  let result = await intro.destroy({
    where:{id}, 
  })
  res.json({result}); 

}


let get_curr =(req,res)=>{
  res.render('./admin/main/curriculum.html')
}

let get_review = (req,res)=>{
  res.render('./admin/main/review.html');
}

let get_popup = (req,res)=>{
  res.render('./admin/main/popup.html'); 
}

module.exports = {
  main,get_popup,get_curr,get_review,add_mainv,create_mainv,update_visual,
  destroy_visual,
}