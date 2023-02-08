import Match from '../database/models/Match';
import Team from '../database/models/Team';

async function createTableResults(id: number) {
  const findAllTeams = await Match.findAll({ where: { inProgress: false } });
  const TeamId = findAllTeams.filter((i) => i.homeTeamId === id);
  const victory = TeamId.filter((i) => i.homeTeamGoals > i.awayTeamGoals);
  const loser = TeamId.filter((i) => i.homeTeamGoals < i.awayTeamGoals);
  const draw = TeamId.filter((i) => i.homeTeamGoals === i.awayTeamGoals);
  let points = 0;
  TeamId.forEach((i) => {
    if (i.homeTeamGoals > i.awayTeamGoals) points += 3;
    if (i.homeTeamGoals === i.awayTeamGoals) points += 1;
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
  const TeamId = findAllTeams.filter((i) => i.homeTeamId === id);
  let goalsFavor = 0;
  let goalsOwn = 0;
  TeamId.forEach((i) => {
    goalsOwn += i.awayTeamGoals;
    goalsFavor += i.homeTeamGoals;
  });
  return {
    goalsFavor,
    goalsOwn,
    goalsBalance: goalsFavor - goalsOwn,
  };
}

export default async function createTable(id: number) {
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
