const { curriculum } = require("../../../models");




let show_curr = async (req, res) => {
  let result = await curriculum.findAll({
    attributes: ['id', 'name'],
  })

  let resultArr = [];
  result.forEach(ele => {
    resultArr.push(ele.dataValues);
  });
  console.log(resultArr);
  res.render('./admin/curriculum/curr_list', {
    resultArr
  })
}

let show_sub = async (req, res) => {
  res.render('./admin/curriculum/subject_list')
}

let add_curr = (req, res) => {
  res.render('./admin/curriculum/curr_add')
}

let add_sub = (req, res) => {
  res.render('./admin/curriculum/subject_add')
}

let create_curr = async (req, res) => {
  let { name, info, term, start_time, end_time, location, tuition, qual } = req.body;
  let image = req.file.filename;

  let result = await curriculum.create({
    name, info, term, start_time, end_time, location, tuition, qual, image,
  });

  res.redirect('/admin/curriculum/curr');
}

module.exports = {
  show_curr, show_sub, create_curr, add_curr, add_sub,
}