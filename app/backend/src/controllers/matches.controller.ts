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
}

export default matchesController;
