const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curr_faq', {
    curr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'curriculum',
        key: 'id'
      }
    },
    board_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'board',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'curr_faq',
    timestamps: false,
    indexes: [
      {
        name: "FK_curr_faq_board",
        using: "BTREE",
        fields: [
          { name: "board_id" },
        ]
      },
      {
        name: "FK_curr_faq_curriculum",
        using: "BTREE",
        fields: [
          { name: "curr_id" },
        ]
      },
    ]
  });
};
