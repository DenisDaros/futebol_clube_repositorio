'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('matches', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    home_team_id: {
      type: Sequelize.INTEGER,
      references: { model: 'teams', key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    home_team_goals: {
      type: Sequelize.INTEGER,
    },
    away_team_id: {
      type: Sequelize.INTEGER,
      references: { model: 'teams', key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    away_team_goals: {
      type: Sequelize.INTEGER,
    },
    in_progress: {
        type: Sequelize.BOOLEAN,
      },
   })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTrable('matches')
  }
};
