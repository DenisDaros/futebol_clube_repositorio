import { NextFunction, Request, Response } from 'express';
import matchesService from '../services/matches.services';

class matchesController {
  static async allmatches(req: Request, res: Response, next: NextFunction) {
    const { inProgress } = req.query;

    if (inProgress === 'true') {
      const matches = await matchesService.allmatchesProgress();
      res.status(200).json(matches);
    } else if (inProgress === 'false') {
      const matches = await matchesService.allmatchesToEnd();
      res.status(200).json(matches);
    } else {
      const matches = await matchesService.allmatches();
      res.status(200).json(matches);
    }

    next();
  }

  static async saveMatches(req: Request, res: Response, next: NextFunction) {
    const matches = await matchesService.saveMatches(req.body);
    res.status(201).json(matches);

    next();
  }

  static async updateMatches(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const teste = parseInt(id, 10);
    await matchesService.updateMatches(teste);
    res.status(200).json({ message: 'Finished' });
    next();
  }

  static async updateMatchesInProgress(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const teste = parseInt(id, 10);
    await matchesService.updateMatchesInProgress(teste, homeTeamGoals, awayTeamGoals);
    res.status(200).json({ message: 'Updated!' });
    next();
  }
}

export default matchesController;
