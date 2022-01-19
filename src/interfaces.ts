export interface Acess {
    Key: string,
    Active: number
}

interface Address {
    zipcode : number,
    street : string,
    number : string,
    complement : string
}

export interface User {
    name: string,
    email: string
    address : Address
}

