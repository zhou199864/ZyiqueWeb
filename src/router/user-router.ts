import express from 'express'
import { hello, login } from '../router-impl/user-router-impl';

const router = express.Router();

router.get('/hello', hello);
router.get('/login', login);

export default router