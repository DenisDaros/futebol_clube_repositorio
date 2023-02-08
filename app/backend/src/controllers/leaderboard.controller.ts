import { NextFunction, Request, Response } from 'express';
import leaderboardService from '../services/leaderboard.services';
import tableConstructionAway from '../utils/createTableAway';

class leaderboardController {
  static async classification(req: Request, res: Response, next: NextFunction) {
    const teams = await leaderboardService.tableConstruction();
    res.status(200).json(teams);
    next();
  }

  static async classificationTeamAway(req: Request, res: Response, next: NextFunction) {
    const teams = await tableConstructionAway();
    res.status(200).json(teams);
    next();
  }
}

export default leaderboardController;
