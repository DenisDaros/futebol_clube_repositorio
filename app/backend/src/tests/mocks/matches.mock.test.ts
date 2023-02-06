
const keysMatch = [
    {
      id: 1,
      homeTeamId: 16,
      homeTeamGoals: 1,
      awayTeamId: 8,
      awayTeamGoals: 1,
      inProgress: false,
    },
    {
        id: 41,
        homeTeamId: 16,
        homeTeamGoals: 2,
        awayTeamId: 9,
        awayTeamGoals: 0,
        inProgress: true,
    },
]

const keysMatchTrue = [
    {
        id: 41,
        homeTeamId: 16,
        homeTeamGoals: 2,
        awayTeamId: 9,
        awayTeamGoals: 0,
        inProgress: true,
    },
]


const keysMatchFalse = [
    {
        id: 1,
        homeTeamId: 16,
        homeTeamGoals: 1,
        awayTeamId: 8,
        awayTeamGoals: 1,
        inProgress: false,
      },
]


const createMatch = {
    id: 49,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 8,
    awayTeamGoals: 2,
    inProgress: true,
  };

  const saveMatch = {
    homeTeamId: 16,
    awayTeamId: 8,
    homeTeamGoals: 2,
    awayTeamGoals: 2,
  };


export {
    keysMatch,
    createMatch,
    saveMatch,
    keysMatchFalse,
    keysMatchTrue
}