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

export interface User extends Address  {
    name: string,
    email: string
    
}

