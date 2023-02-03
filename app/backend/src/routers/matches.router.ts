import { Router } from 'express';
import matchesController from '../controllers/matches.controller';
import validationEmailPassword from '../middlewares/validateToken';

const router = Router();

router.get('/', matchesController.allmatches);
router.post('/', validationEmailPassword, matchesController.saveMatches);

export default router;
