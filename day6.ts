//?interface in typescript -  like class but not exactly 

interface consumer{
    name: string;
    email:string;
    googleId?:string; //optional value
    gretting(name:string):string
}




//? interface vs types 


interface consumer{
  
    googeId:string; 
   
}  // we can add additional values also without toughing the previously declared interface like this
const client:consumer={
    name:'hari',
    email:'h@gmail.com',
    gretting(value){      //here in parameter we can give any name but value is ony stirng
     return ''
    },
    googeId:'j'
}


//? inhertance using the interface but in type we need to use the & to extends

interface Admin extends consumer {
   role: 'Admin'
}



const client1:Admin={
    name:'hari',
    email:'h@gmail.com',
    gretting(value){      //here in parameter we can give any name but value is ony stirng
     return ''
    },
    googeId:'j',
    role:'Admin'
}


