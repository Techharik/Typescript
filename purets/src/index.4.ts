// Abstract classs for interfaces.
// ? in abstract classes we not able to create object but from the inherited child we can.


abstract class TakePhoto{
    constructor(
        public photo:string,
        public url: string
    ){}

    abstract getPhoto():void;

    getInformation():number{
        return 8
    }


}


class photo1 extends TakePhoto{
    constructor(
        public photo:string,
        public url: string
    ){
        super(photo,url)
    }

    getPhoto():void{
    console.log('Photo')
    }
}

//? A abstrct class is exact blue print we can inherit and create a class and can create a object.

//? Abstract method are used to overide from previous methods.

//? like wise normal methods are also inherited.


const pic1 = new photo1('w','w')

// pic1. all methods are available