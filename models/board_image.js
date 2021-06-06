const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('board_image', {
    board_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'board',
        key: 'id'
      }
    },
    iamge: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'board_image',
    timestamps: false,
    indexes: [
      {
        name: "FK__board",
        using: "BTREE",
        fields: [
          { name: "board_id" },
        ]
      },
    ]
  });
};