const { board,
  board_image,
} = require('../../../models');


let show_list = async (req, res) => {
  let { type } = req.query;
  let result ; 
  if(type=='8'){//faq
      result = await board.findAll({
      attributes: ['subject', 'content', 'hit','id'],
      order: [['id', 'DESC']],
      where: { type, },
    })
    
    
  // }else if(type=='7'){
    // type이 7 일 때, consult db에서 가져오기 
  }else if(type=='2'){//시설소개
    result = await board.findAll({
      attributes: [ 'content','id','show'],
      order: [['id', 'DESC']],
      where: { type, },
    })
  }
  else{
     result = await board.findAll({
      attributes: ['id', 'writer', 'subject', 'date', 'hit'],
      order: [['id', 'DESC']],
      where: { type, },
    })
    

  }

  let title = board_strtype(type);
  result = number_set(result)

  switch(type){
    case '2':
      console.log(result); 
      res.render(`./admin/info/interior`, {
        type, result, title,
      })
      break; 
    case '3': 
    case '4': 
    case '5': 
    case '6':
      res.render(`./admin/community/list`, {
        type, result, title,
      })
      break; 
    case '7':
      res.render(`./admin/consult/list`, {
        type, result, title,
      })
      break;
    case '8':
      res.render(`./admin/consult/faq`, {
        result, 
      })
      break;
  }

  
}


let show_editor = (req, res) => {
  let { type } = req.query;
  let title = board_strtype(type);

  res.render(`./admin/community/write`, {
    type, title,
  })
}


let make_article = async (req, res) => {
  let { type, subject, content } = req.body;
  
  let writer = "관리자" // 추후 세션아이디로 수정 
  let result = await board.create({
    writer, subject, content, type
  })
  let id = result.dataValues.id;
  res.redirect(`/admin/community/view?id=${id}`)// view 로 옮기기. 
}


let show_article = async (req, res) => {
  let { id } = req.query;
  if(id==1||id==2){ 
    let result = await board.findOne({
      attributes: ['subject', 'content','id'],
      where: { id, },
    });
    result = result.dataValues;
    res.render('./admin/info/view', {
      result,
    }) 
  }else{
    let result = await board.findOne({
      attributes: ['id', 'writer', 'subject', 'date', 'hit', 'content'],
      where: { id, },
    });
    result = result.dataValues;
    res.render('./admin/community/view', {
      result,
    })
  }
  
}

let show_modify = async (req, res) => {
  let { id } = req.query;
  let result = await board.findOne({
    attributes: ['id', 'writer', 'subject', 'content'],
    where: { id, },
  });
  result = result.dataValues;
  if(id==1||id==2){ 
    res.render('./admin/info/modify', {
      result,
    })  
  }else{
    res.render('./admin/community/modify', {
      result,
    })
  }
}

let modify_article = async (req, res) => {
  if(req.body.id==2) req.body.subject="오시는 길"
  let { subject, id, content } = req.body;

  let result = await board.update({
    subject, content
  }, {
    where: { id, },
  });

  if(id==1||id==2){
    res.redirect(`/admin/info/view?id=${id}`)// view 로 옮기기. 

  }else{
    res.redirect(`/admin/community/view?id=${id}`)// view 로 옮기기. 

  }
}


let destroy_article = async (req, res) => {
  let { id } = req.query;
  let result = await board.findOne({
    attributes: ['type'],
    where: { id, },
  });
  console.log(result)
  let { type } = result.dataValues;
  let isDistroy = await board.destroy({
    where: { id, }
  })
  if(type=="8"){
    res.redirect(`/admin/consult/list?type=${type}`)
  }else{

    res.redirect(`/admin/community/list?type=${type}`)
  }
}



module.exports = {
  show_list, show_editor,make_article, show_article,
     destroy_article,
  modify_article, show_modify

}


//타입변화함수 

function board_strtype(x) {
  let str;
  switch (x) {
    // case 0:
    //   str = 'intro';
    //   break;
    // case 1:
    //   str = 'interior';
    //   break;
    // case 2:
    //   str = 'interior';
    //   break;
    case '3':
      str = '공지사항';
      break;
    case '4':
      str = '경일 이야기';
      break;
    case '5':
      str = '경일 기자단';
      break;
    case '6':
      str = '교수 칼럼';
      break;
    case '7':
      str = "상담 목록";
      break;
    case '8':
      str = "자주 묻는 질문"
      break;
  }
  return str;
}



//글번호생성 함수 
function number_set(x) {
  let N = x.length;
  let arr = [];
  x.forEach(ele => {
    ele.dataValues['num'] = N;
    arr.push(ele.dataValues)
    N--;
  });
  return arr;
}