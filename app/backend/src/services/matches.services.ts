import Match from '../database/models/Match';
import Team from '../database/models/Team';
import { Icreatem } from '../types';

class matchesService {
  static async allmatches(): Promise<object> {
    const matches = await Match.findAll({
      include: [
        {
          model: Team, as: 'homeTeam', attributes: { exclude: ['id'] },
        },
        {
          model: Team, as: 'awayTeam', attributes: { exclude: ['id'] },
        },
      ],
    });

    return matches;
  }

  static async allmatchesProgress(): Promise<object> {
    const matches = await Match.findAll({ where: { inProgress: true },
      include: [
        {
          model: Team, as: 'homeTeam', attributes: { exclude: ['id'] },
        },
        {
          model: Team, as: 'awayTeam', attributes: { exclude: ['id'] },
        },
      ],
    });

    return matches;
  }

  static async allmatchesToEnd(): Promise<object> {
    const matches = await Match.findAll({ where: { inProgress: false },
      include: [
        {
          model: Team, as: 'homeTeam', attributes: { exclude: ['id'] },
        },
        {
          model: Team, as: 'awayTeam', attributes: { exclude: ['id'] },
        },
      ],
    });

    return matches;
  }

  static async saveMatches({
    homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals,
  }: Icreatem) {
    const matchCreate = await Match.create({
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });
    return matchCreate;
  }

  static async updateMatches(id: number) {
    await Match.update({ inProgress: false }, { where: { id } });
  }

  static async updateMatchesInProgress(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    await Match.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }
}

export default matchesService;
