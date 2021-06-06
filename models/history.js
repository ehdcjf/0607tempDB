const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history', {
    year: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'history',
    timestamps: false
  });
};
