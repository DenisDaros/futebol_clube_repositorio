import Team from '../database/models/Team';

class teamsService {
  static async allTeams() {
    const teams = await Team.findAll();
    return teams;
  }

  static async TeamsById(id: number) {
    const teams = await Team.findByPk(id);
    return teams;
  }
}

export default teamsService;
