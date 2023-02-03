import Match from '../database/models/Match';
import Team from '../database/models/Team';
import { Icreatem } from '../types';

class matchesService {
  static async allmatches() {
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

  static async allmatchesProgress() {
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

  static async allmatchesToEnd() {
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
}

export default matchesService;
