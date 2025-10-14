class Human{
    //properties
    age=13;
    #wt=80;
    ht=100;
    speed;
    constructor(newSpeed,newHeight){
        this.speed=newSpeed;
        this.ht=newHeight;
    }
    //behaviour
    walking(){
        console.log('I am Walking ',this.#wt);
    }
    running(){
        console.log("I am running");
    }
    get fetchWeight(){
        return this.#wt;
    }
    set modifyWeight(val){
        this.#wt=val;
    }
}
let obj=new Human();
console.log(obj.age);
obj.running();
obj.walking();
let object=new Human(50,190);
console.log(object.speed);
console.log(object.ht);
obj.walking();
//Default Parameter
function sayName(fName='Milkha',lName=fName.toUpperCase()){
    console.log("My Name is: ",fName,lName);
}
sayName();
function solve(value=8){
    console.log('Square: ',value**2)
}
solve(undefined);
function getAge(){
    return 20;
}
function utility(name1='Harsh',age=getAge()){
    console.log(name1," ",age);
}
utility();
