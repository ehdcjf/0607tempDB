const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sboard_image', {
    sboard_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sboard',
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
    tableName: 'sboard_image',
    timestamps: false,
    indexes: [
      {
        name: "FK__board",
        using: "BTREE",
        fields: [
          { name: "sboard_id" },
        ]
      },
    ]
  });
};
