let show_curr = async(req,res)=>{ 
  
  res.render('./admin/curriculum/curr_list')
}

let show_sub = async(req,res)=>{
  res.render('./admin/curriculum/subject_list')  
}

let create_curr = (req,res)=>{ 
  res.render('./admin/curriculum/curr_add')
}

module.exports ={ 
  show_curr, show_sub,create_curr,
}