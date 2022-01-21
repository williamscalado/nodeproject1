var md5 = require('md5');
import { Acess, User } from './interfaces'

// imaginando que esses dados seria recebido do Banco 
const Master: Acess = {
    Key: '4c1caad0b647a31d0ddf5c0521b6c1ea',
    Active: 1
}

export const valid = (user: string, id: number) => {
    let Key = md5(user + id);
    if (Key === Master.Key && Master.Active === 1) {
        return true
    }
    return false
}

export default { valid }