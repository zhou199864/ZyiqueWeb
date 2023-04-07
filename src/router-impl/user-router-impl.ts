import { Request, Response } from 'express'
import { ok, error } from '../utils/response-msg'

const hello = async (req: Request, res: Response) => {
    res.send(ok('hello nodejs web by express !'));
}

export {
    hello
}