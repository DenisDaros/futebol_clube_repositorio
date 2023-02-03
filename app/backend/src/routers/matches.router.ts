import { Router } from 'express';
import matchesController from '../controllers/matches.controller';
import validationTokenUser from '../middlewares/validateToken';
import compareTeams from '../middlewares/compareTeams';

const router = Router();

router.get('/', matchesController.allmatches);
router.post('/', validationTokenUser, compareTeams, matchesController.saveMatches);
router.patch('/:id/finish', matchesController.updateMatches);

export default router;
