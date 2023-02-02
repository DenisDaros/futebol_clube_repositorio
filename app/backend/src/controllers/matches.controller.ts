import { NextFunction, Request, Response } from 'express';
import matchesService from '../services/matches.services';

class matchesController {
  static async allmatches(req: Request, res: Response, next: NextFunction) {
    const matches = await matchesService.allmatches();
    if (!matches) return res.status(200).json({ message: 'deu ruim' });
    res.status(200).json(matches);
    next();
  }
}

export default matchesController;
