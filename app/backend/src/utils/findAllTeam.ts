import Team from '../database/models/Team';

export default class findTeams {
  static async findTeams(team: string) {
    const teamA = await Team.findOne({ where: { id: team } });
    return teamA;
  }
}
