// enums - how to restrict the user choices 

enum seatChoices {
    AISLE,  //0
    MIDDLE , //1
    WINDOW //2
}


const hcSeat = seatChoices.MIDDLE // here after the .  the option are sujjested 

// by default the seatChoices.Middle = 0 you can put a default value 
enum Choices {
    AISLE,  //0
    MIDDLE =10, //10
    WINDOW //11
}
// if you use string the pattern is broken so we nned to add
enum Choicess {
    AISLE ='hi',  //hi
    MIDDLE ='hee', //hee
    WINDOW =10
}