import { Request, Response } from 'express'
import JWT from '../utils/jwt';
import { error } from '../utils/response-msg';

const tokenAuth = (req: Request, res: Response, next: any) => {
    if (req.url != '/user/login' && req.url != '/user/register') {
        let token = req.headers.token as string;
        let result = JWT.verify(token);
        if (result) {
            next();
        } else {
            res.send(error('token expired, please general new token.'));
        }
    } else {
        next();
    }
}

export {
    tokenAuth
}