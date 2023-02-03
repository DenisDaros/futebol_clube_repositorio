import { Request, Response, NextFunction } from 'express';
import findTeams from '../utils/findAllTeam';

export default async function existTeams(req: Request, res: Response, next: NextFunction) {
  const { homeTeamId, awayTeamId } = req.body;
  const teamA = await findTeams.findTeams(homeTeamId);
  const teamB = await findTeams.findTeams(awayTeamId);
  if (!teamA || !teamB) {
    return res.status(404).json({
      message: 'There is no team with such id!',
    });
  }
  return next();
}
