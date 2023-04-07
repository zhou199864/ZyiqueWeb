import express from 'express'
import cors from 'cors'

import helloRouter from './router/user-router'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", helloRouter);


app.listen(8099, () => {
    console.log('start listener... port: 8099');
});