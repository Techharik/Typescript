//? Union type sin array.

let score : number| string = 33;  // it may be string or number. both union

type user={
    name: string;
    id :number
}
type Admin={
    userName: string;
    id :number
}

let hari: user | Admin = {name:'hari', id : 123} //or 

hari ={name:"hari",userName:'admin',id:123} // or just uses UserName


//union in function

// function getDb(id:string | number){
//     console.log(id)
// }

//! getDb(45) // now the parameters acceptes both number and string
//! getDb("45") // now the parameters acceptes both number and string

function getDb(id:string | number){
 //!   id.toLowerCase() // still it is maybe a string but it treats it as a new type


    if (typeof id === 'string'){
        id.toLocaleUpperCase   //because of its condition is that 100% string
    }else{
        id.toPrecision
    }

}


//?arrays


const data: number[]=[1,2,3,'4'] //only allow numbers
const data1: number[] | string[]=[1,2,3] //or  ['3','1','2'] //! mistake if we do then is like either the array is all number or is all string.


//! to write the heterogenous of array mixed value array


const data3 : (number| string | boolean)[] =[1,2,3,"4",true] //by adding the parathesis

//!literal type of assignment


let pi:3.14 = 3.14

pi =3.145 //thorws error becaus ethe value is literally a;llowtted