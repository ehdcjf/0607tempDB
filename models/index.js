'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const initModels = require('./init-models');



let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

let models = initModels(sequelize);


db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.board = models.board;
db.consult = models.consult;
db.history = models.history;
db.teacher = models.teacher;
db.curriculum = models.curriculum;
db.subject = models.subject;
db.sboard = models.sboard;
db.intro = models.intro;
db.sboard = models.sboard;
db.curr_sbj = models.curr_sbj;


// curr_faq,
// curr_rv,
// main_rv,


module.exports = db;
