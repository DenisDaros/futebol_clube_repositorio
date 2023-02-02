import { Router } from 'express';
import teamsController from '../controllers/teams.controller';

const router = Router();

router.get('/', teamsController.allTeams);
router.get('/:id', teamsController.TeamsById);

export default router;
