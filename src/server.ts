import express, { Request, Response } from 'express';
import mainroutes from './routes/index';
import loginroutes from './routes/login'

const server = express()
// formas de usar as rotas 
server.use('/', mainroutes)
server.use('/login', loginroutes)

// pagina 404
server.use((req: Request, res: Response) => {
    res.status(404).send('Ops! page not found!')
})
server.listen(3000)


