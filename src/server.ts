import express, { Request, Response } from 'express';
import path from 'path';
import mainroutes from './routes/index';
import loginroutes from './routes/login'

const server = express()

// difinindo rotas de arquivos estaticos e publico
let url = path.join(__dirname, '../public')
server.use(express.static(url))

//permite o uso do corpo da pagina para obter por exemplo dados VIA POST
server.use(express.urlencoded({ extended: true }))

// formas de usar as rotas 
server.use('/', mainroutes)
server.use('/login', loginroutes)

// pagina 404
server.use((req: Request, res: Response) => {
    res.status(404).send('Ops! page not found!')
})

server.listen(3000)


