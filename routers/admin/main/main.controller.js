
let main = (req, res) => {
  res.render('./admin/main/mainvisual.html');
}

let get_curr =(req,res)=>{
  res.render('./admin/main/maincurriculum.html')
}

let get_review = (req,res)=>{
  res.render('./admin/main/mainreview.html');
}

let get_popup = (req,res)=>{
  res.render('./admin/main/popup.html'); 
}

module.exports = {
  main,get_popup,get_curr,get_review,

}