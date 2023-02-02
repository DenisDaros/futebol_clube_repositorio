import { Router } from 'express';
import userController from '../controllers/login.controller';
import validationEmailPassword from '../middlewares/loginMidd';

const router = Router();

router.post('/', validationEmailPassword, userController.login);
router.get('/validate', userController.loginAcess);

export default router;
