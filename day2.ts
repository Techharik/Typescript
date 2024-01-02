//? object - bad behaviour still exists in typesscrtipr too.


//? object in parametes of  afunctions:


// function getUser({name:string,password:number}){
//     return ''
// }


// getUser({name:'Hari',password:123})

//? object in return statements:

// function buyCourse():{user:string,pass:number}{

// }

//! oddd behaviour of Ts is if you pass a extra arguments it shows errorr but if you pass a object that has extra value it doesn't show error.

//? TypeAllies in Typescript

// type User = {
//     name: string,
//     age:number,
//     email:string,
//     isPaid:boolean
// }

// function createUser(user: User):User{
//  return user
// }

//? readOnly and ? and & usecase sceneior


// ! readonly is used mongodb userID CREATION EXAMPLE
type User = {
    readonly _id:string;          // only for reading purposes we cannot modifiy 
        name: string,
        age:number,
        email:string,
        isPaid:boolean,
        credcardDetails?:number  //optional we can pass or don't want 
    }
    
type pay={
    num :number
}

type cardDetails = User & pay & {
    cvv:number
} // combining types using the existiong types ...

//?Arrrays

const superHeroes:string[] =[]
const superPowers:Array<string> =[]


superHeroes.push('spiderman')

type User1 = {
    name:string,
    isActive:boolean,
}

const userAll: User1[] =[]

userAll.push({name:'Hari',isActive:false})


// console.log(user)

export {}