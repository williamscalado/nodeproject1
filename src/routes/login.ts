import { Router, Response, Request } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Page of login');
})

router.get('/logout', (req: Request, res: Response) => {
    res.send('Exit to system')

})

router.get('/exec/:id-:name', (req: Request, res: Response) => {
    let { id, name } = req.params
    res.send(`Hi ${name},  Your id is: ${id}`)
});

export default router;