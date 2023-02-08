import Team from '../database/models/Team';
import createTable from '../utils/createTable';

export default class leaderboardService {
  static async tableConstruction() {
    const allTeams = await Team.findAll();
    const table = await Promise.all(allTeams.map((i) => createTable(i.id)));
    // Promise.all espera que todas as promises sejam resolvidas, Se qualquer uma das promises passadas for rejeitada, Promise.all assíncronamente é rejeitada com o valor da promise rejeitada, independentemente se outras promises foram resolvidas.
    const classification = table.sort((a, b) => b.totalPoints - a.totalPoints);

    return classification;
  }
}
