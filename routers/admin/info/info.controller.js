
let get_intro = (req, res) => {
  res.render('./admin/info/intro.html');
}

let get_interior =(req,res)=>{
  res.render('./admin/info/interior.html')
}

let get_history = (req,res)=>{
  res.render('./admin/info/history.html');
}

let get_teachers = (req,res)=>{
  res.render('./admin/info/teacher.html'); 
}

let get_loc = (req,res)=>{
  res.render('./admin/info/location.html'); 
}

module.exports = {
  get_intro, get_history, get_teachers, get_interior, get_loc,
}