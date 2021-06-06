var DataTypes = require("sequelize").DataTypes;
var _board = require("./board");
var _board_image = require("./board_image");
var _consult = require("./consult");
var _curr_faq = require("./curr_faq");
var _curr_sbj = require("./curr_sbj");
var _curriculum = require("./curriculum");
var _history = require("./history");
var _sboard = require("./sboard");
var _sboard_image = require("./sboard_image");
var _subject = require("./subject");
var _teacher = require("./teacher");

function initModels(sequelize) {
  var board = _board(sequelize, DataTypes);
  var board_image = _board_image(sequelize, DataTypes);
  var consult = _consult(sequelize, DataTypes);
  var curr_faq = _curr_faq(sequelize, DataTypes);
  var curr_sbj = _curr_sbj(sequelize, DataTypes);
  var curriculum = _curriculum(sequelize, DataTypes);
  var history = _history(sequelize, DataTypes);
  var sboard = _sboard(sequelize, DataTypes);
  var sboard_image = _sboard_image(sequelize, DataTypes);
  var subject = _subject(sequelize, DataTypes);
  var teacher = _teacher(sequelize, DataTypes);

  board_image.belongsTo(board, { as: "board", foreignKey: "board_id"});
  board.hasMany(board_image, { as: "board_images", foreignKey: "board_id"});
  curr_faq.belongsTo(board, { as: "board", foreignKey: "board_id"});
  board.hasMany(curr_faq, { as: "curr_faqs", foreignKey: "board_id"});
  curr_faq.belongsTo(curriculum, { as: "curr", foreignKey: "curr_id"});
  curriculum.hasMany(curr_faq, { as: "curr_faqs", foreignKey: "curr_id"});
  curr_sbj.belongsTo(curriculum, { as: "curr", foreignKey: "curr_id"});
  curriculum.hasMany(curr_sbj, { as: "curr_sbjs", foreignKey: "curr_id"});
  sboard_image.belongsTo(sboard, { as: "sboard", foreignKey: "sboard_id"});
  sboard.hasMany(sboard_image, { as: "sboard_images", foreignKey: "sboard_id"});
  curr_sbj.belongsTo(subject, { as: "sub", foreignKey: "sub_id"});
  subject.hasMany(curr_sbj, { as: "curr_sbjs", foreignKey: "sub_id"});

  return {
    board,
    board_image,
    consult,
    curr_faq,
    curr_sbj,
    curriculum,
    history,
    sboard,
    sboard_image,
    subject,
    teacher,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
