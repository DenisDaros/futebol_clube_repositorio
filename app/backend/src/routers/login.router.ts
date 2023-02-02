import { Router } from 'express';
import userController from '../controllers/login.controller';

const router = Router();

router.post('/', userController.login);
// router.get('/validate', userController.loginAcess);

export default router;
