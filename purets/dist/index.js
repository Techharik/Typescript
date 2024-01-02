"use strict";
console.log('ts is here hee');
// class MyEmployee{
//     private readonly _id:number;
//      name:string;
//      email:string;
//     constructor(name:string,email:string){
//         this._id=1
//         this.name = name;
//         this.email = email;
//     }
// }
// const employe1 = new MyEmployee('Hari','h@gmail.com')
//! employe1._id // read only but also not able access
//?another way to declare shortcuts
// class MyEmployee{
//     private readonly _id:number =1;
//     constructor(
//        public name:string,
//        public email:string){
//     }
// }
//?getter and setter in ts
class MyEmployee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._id = 1;
        this.__id = 2;
    }
}
class mangers extends MyEmployee {
    constructor() {
        //private is not acccessable here 
        super(...arguments);
        this.isCertifited = true;
    }
    // !   changeId(){
    //     this._id =2   //can't change this cause its private 
    //    }
    changeId2() {
        this.__id = 2; //can change this cause its protected 
    }
}
