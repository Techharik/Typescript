//?interfaces - telling the blueprints what all are neccessary t[es]

interface camera{
    apeature:number;
    quality:string;
}

interface lighting extends camera{
   light:string;
   greeting():string
}


class Instagram implements camera{
    constructor(
        public apeature:number,
        public quality:string
    ){}
}

//we can add more interfaces here instead of using extend in interfaces
class facebook implements lighting, camera{
    constructor(
        public apeature:number,
        public quality:string,
        public light:string,
        
        
    ){}

    greeting(): string {
        return ''
    }
}