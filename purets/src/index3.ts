//?abstract classs - are actual blueprints not allowed to create an object but the class that inherited can able to create an objects....

//?generics in ts - i pass number you return number example




function indenityOne(val:boolean |number =3):boolean | number{
    if(typeof val === 'number'){
        return val
    }else{
        return val
    }
}
// indenityOne(true)

function genericsts<Type>(args: Type):Type{
    return args
}

//! what type i am pass return that type 

//?generics in arra and arrow functions

const infoGenerating = <Type>(val: Type[]):Type =>{
         return val[6]
}

infoGenerating(['a','a'])