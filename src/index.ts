import Functions, { valid } from './function'

let user: string = "Williams"
let password: number = 132

if (valid(user, password)) {
    console.log('next page')
} else {
    console.log('User nor found');
}
