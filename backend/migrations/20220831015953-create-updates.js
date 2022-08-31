'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Updates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      oldTitle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      oldContent: {
        allowNull: false,
        type: Sequelize.STRING
      },
      oldDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updateDate: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Updates');
  }
};
