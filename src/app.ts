import express from 'express'
import cors from 'cors'

import userRouter from './router/user-router'
import { tokenAuth } from './middle/token-middle';
/**
 * 中间件
 */
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(tokenAuth)
app.use("/user", userRouter);


app.listen(8099, () => {
    console.log('start listener... port: 8099');
});