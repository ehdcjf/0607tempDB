const { board,
  board_image,
  } = require('../../models');


let show_list = async(req,res)=>{ 
  let {type} = req.query;
  let numtype = board_type(type);
  let result = await board.findAll({ 
    attributes:['id','writer','subject','date','hit'], 
    order:[['id','DESC']], 
    where:{type:numtype},
  })
  result = number_set(result)
  res.render(`./admin/board/list`,{
    type, result,
  })
}


let show_editor = (req,res)=>{ 
  let {type} = req.query;
  res.render(`./admin/board/write`,{
    type, 
  })
}


let make_article = async(req,res)=>{ 
  let { type,subject,content} = req.body;
  let strtype = type; 
  type = board_type(type); 
  let writer = "관리자" // 추후 세션아이디로 수정 
  let result = await board.create({ 
    writer,subject,content,type
  })
  let id = result.dataValues.id; 
  res.redirect(`/admin/board/view?id=${id}`)// view 로 옮기기. 
}


let show_article = async(req,res)=>{ 
  let {id} = req.query;

  let result = await board.findOne({ 
    attributes:['id','writer','subject','date','hit','content'], 
    where:{id,},
  }); 
  result = result.dataValues; 
  res.render('./admin/board/view',{
    result, 
  })
}

let show_modify = async(req,res)=>{
  let {id} =req.query;
  let result = await board.findOne({ 
    attributes:['id','writer','subject','content'], 
    where:{id,},
  });
  result = result.dataValues; 
  res.render('./admin/board/modify',{
    result, 
  })
}

let modify_article = async(req,res)=>{ 
  let {subject,id,content} = req.body; 

  let result = await board.update({
    subject,content
  },{
    where:{id,},
  });

  res.redirect(`/admin/board/view?id=${id}`)// view 로 옮기기. 

}


let destroy_article = async(req,res)=>{ 
  let {id} =req.query;
  let result = await board.findOne({ 
    attributes:['type'], 
    where:{id,},
  }); 
  console.log(result); 
  console.log(result.dataValues); 
  let {type} = result.dataValues; 
  let isDistroy = await board.destroy({
    where:{id,}
  })
  
  res.redirect(`/admin/board/list?type=${board_strtype(type)}`)
}



module.exports = {
  show_list,show_editor,make_article, show_article,destroy_article,
  modify_article,show_modify

}


//타입변화함수 
function board_type(x){ 
  let num; 
  switch(x){ 
    case 'intro':
      num = 0; 
      break;
    case 'interior':
      num = 1;
      break;
    case 'location':
      num = 2;
      break;
    case 'notice':
      num = 3; 
      break;
    case 'story':
      num = 4;
      break;
    case 'reporter':
      num = 5;
      break;
    case 'column':
      num = 6;
      break;
    case 'faq':
      num = 7;
        break;
  }
  return num; 
}

function board_strtype(x){ 
  let str; 
  switch(x){ 
    case 0:
      str = 'intro'; 
      break;
    case 1:
      str = 'interior';
      break;
    case 2:
      str = 'interior';
      break;
    case 3:
      str = 'notice'; 
      break;
    case 4:
      str = 'story';
      break;
    case 5:
      str = 'reporter';
      break;
    case 6:
      str = 'column';
      break;
    case 'faq':
      str = 7;
        break;
  }
  return str; 
}



//글번호생성 함수 
function number_set(x){ 
  let N = x.length; 
  let arr = []; 
  x.forEach(ele => {
    ele.dataValues['num'] = N;
    arr.push(ele.dataValues)
    N--; 
  });
 return arr;  
}