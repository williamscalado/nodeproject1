import { Router, Response, Request } from 'express';
import {loginExec} from '../controllers/login/loginControllers';


const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Page of login');
})

router.get('/logout', (req: Request, res: Response) => {
    res.send('Exit to system')

})

// usando contrllers
router.get('/exec', loginExec);

export default router;