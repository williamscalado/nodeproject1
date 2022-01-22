import {Response , Request } from 'express'

export const loginExec = (req : Request , res : Response) =>{

        let id : string = req.query.id as string;
        let name : string = req.query.name as string;
        
    res.send(`Hi ${name},  Your id is: ${id}`)


}