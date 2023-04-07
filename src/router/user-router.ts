import express from 'express'
import { hello } from '../router-impl/user-router-impl';

const router = express.Router();

router.get('/hello', hello);

export default router