import Functions, { valid } from './function'
import validator from 'validator'

let user: string = "Williams"
let password: number = 132
let email: string = "williamscalado@gmail.com.br"

//console.log(validator.isEmail(email))


if (valid(user, password)) {
    console.log('next page')
} else {
    console.log('User nor found');
}