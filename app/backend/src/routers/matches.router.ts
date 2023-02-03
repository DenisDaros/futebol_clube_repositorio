import { Router } from 'express';
import matchesController from '../controllers/matches.controller';
import validationTokenUser from '../middlewares/validateToken';
import compareTeams from '../middlewares/compareTeams';
import existTeams from '../middlewares/existTeams';

const router = Router();

router.get('/', matchesController.allmatches);
router.post('/', validationTokenUser, existTeams, compareTeams, matchesController.saveMatches);
router.patch('/:id/finish', matchesController.updateMatches);

export default router;
