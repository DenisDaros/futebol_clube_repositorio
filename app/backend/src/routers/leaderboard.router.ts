import { Router } from 'express';
import leaderboardController from '../controllers/leaderboard.controller';

const router = Router();

router.get('/home', leaderboardController.classification);
router.get('/away', leaderboardController.classificationTeamAway);

export default router;
