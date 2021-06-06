const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curr_sbj', {
    curr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'curriculum',
        key: 'id'
      }
    },
    sub_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'subject',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'curr_sbj',
    timestamps: false,
    indexes: [
      {
        name: "FK__curriculum",
        using: "BTREE",
        fields: [
          { name: "curr_id" },
        ]
      },
      {
        name: "FK__subject",
        using: "BTREE",
        fields: [
          { name: "sub_id" },
        ]
      },
    ]
  });
};
