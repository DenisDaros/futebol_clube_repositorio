import { DataTypes, Model } from 'sequelize';
import Match from './Match';
import db from '.';

class Team extends Model {
  declare id: number;
  declare teamName: string;
}

Team.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  teamName: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  tableName: 'teams',
});

Team.hasMany(Match, { foreignKey: 'homeTeamId', as: 'homeTeamId' });
Team.hasMany(Match, { foreignKey: 'awayTeamId', as: 'awayTeamId' });

export default Team;
