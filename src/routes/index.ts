import { Router, Request, Response } from 'express';
const routerlogin = Router();

routerlogin.get('/', ( req: Request , res : Response) => {
    res.send('teste index')
});


routerlogin.get('/info', (req: Request, res: Response) => {
    res.send('ok')
});


export default routerlogin;