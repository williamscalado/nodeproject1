import express, { Request, Response } from 'express';
import mainroutes from './routes/index';
import loginroutes from './routes/login'

const server = express()
// formas de usar as rotas 
server.use('/', mainroutes)
server.use('/login', loginroutes)
server.listen(3000)


