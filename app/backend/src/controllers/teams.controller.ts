import { NextFunction, Request, Response } from 'express';
import teamsService from '../services/teams.services';

class teamsController {
  static async allTeams(req: Request, res: Response, next: NextFunction) {
    const teams = await teamsService.allTeams();
    res.status(200).json(teams);
    next();
  }

  static async TeamsById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const teste = parseInt(id, 10);
    const team = await teamsService.TeamsById(teste);
    res.status(200).json(team);
    next();
  }
}

export default teamsController;
