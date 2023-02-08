import Match from '../database/models/Match';
import Team from '../database/models/Team';

async function createTableResults(id: number) {
  const findAllTeams = await Match.findAll({ where: { inProgress: false } });
  const TeamId = findAllTeams.filter((i) => i.awayTeamId === id);
  const victory = TeamId.filter((i) => i.awayTeamGoals > i.homeTeamGoals);
  const loser = TeamId.filter((i) => i.awayTeamGoals < i.homeTeamGoals);
  const draw = TeamId.filter((i) => i.awayTeamGoals === i.homeTeamGoals);
  let points = 0;
  TeamId.forEach((i) => {
    if (i.awayTeamGoals > i.homeTeamGoals) points += 3;
    if (i.awayTeamGoals === i.homeTeamGoals) points += 1;
  });
  return {
    totalPoints: points,
    totalGames: TeamId.length,
    totalVictories: victory.length,
    totalDraws: draw.length,
    totalLosses: loser.length,
  };
}

async function createTableGoals(id: number) {
  const findAllTeams = await Match.findAll({ where: { inProgress: false } });
  const TeamId = findAllTeams.filter((i) => i.awayTeamId === id);
  let goalsFavor = 0;
  let goalsOwn = 0;
  TeamId.forEach((i) => {
    goalsOwn += i.homeTeamGoals;
    goalsFavor += i.awayTeamGoals;
  });
  return {
    goalsFavor,
    goalsOwn,
    goalsBalance: goalsFavor - goalsOwn,
  };
}

async function createTableAway(id: number) {
  const team = await Team.findByPk(id);
  const {
    totalPoints, totalGames, totalVictories, totalLosses, totalDraws,
  } = await createTableResults(id);
  const { goalsFavor, goalsOwn, goalsBalance } = await createTableGoals(id);
  return {
    name: team?.teamName,
    totalPoints,
    totalGames,
    totalVictories,
    totalDraws,
    totalLosses,
    goalsFavor,
    goalsOwn,
    goalsBalance,
    efficiency: ((totalPoints / (totalGames * 3)) * 100).toFixed(2),
  };
}

export default async function tableConstructionAway() {
  const allTeams = await Team.findAll();
  const table = await Promise.all(allTeams.map((i) => createTableAway(i.id)));
  const classification = table.sort((a, b): number =>
    b.totalPoints - a.totalPoints
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor);

  return classification;
}
