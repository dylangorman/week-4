// oop 
// object orientated programming 

// let bunny = {
//     name: "sherlock",
//     age: 4, 

//     birthday() {
//         this.age++  // looking into this object //++ adds one to age
//     },
// }


// jclass verision
// constructor method
class Bunny { //no equals, capital letter
    constructor(name, age){ //parameter can be whatever we want not just name but canmt start with a number. 
        this.name = name
        this.age = age
    }
    // name =  "sherlock" //no commas at end
    // age = 4 //swap colons for equals 

// isAlive = false 

    birthday() {
        this.age++  // looking into this object //++ adds one to age
    }  //no commas
}
let sherlock = new Bunny("Sherlock", 4)
let watson = new Bunny("Watson", 6) // still will print same as above as class is hard coded as "sherlock"
let  enola = new Bunny ("Enola", 2)
let  mycroft = new Bunny ("mycroft", 5)

// console.log(sherlock)
// console.log(watson)
// console.log(enola)
// console.log(mycroft)



// ACTIVITY 1 
class child {
    constructor(fname, sname, age, sex){
        this._fname = fname
        this._sname = sname
        this.age = age
        this.sex = sex
    }
    get name (){
        return `${this._fname} ${this._sname}!`
    }
    birthday(){
        this.age++
    }
}
let Phoebee = new child("Phoebee", "Gorman", 7, "female")
// console.log(Phoebee.name)
let Phoenix = new child("Phoenix", "Gorman", 4, "male")
let Lena = new child("Lena", "Smith", 5, "female")
let Alfie = new child("Alfie", "Smith", 4, "male")
// console.log(Phoebee)
// console.log(Phoenix)
// console.log(Lena)
// console.log(Alfie)

// Phoebee.birthday()
// console.log (Phoebee)
// Phoebee.birthday()
// console.log (Phoebee)
// Phoebee.birthday()
// console.log (Phoebee)
// Phoebee.birthday()
// console.log (Phoebee)


// ACITIVITY 2 
class car {
    constructor(manufacturer, model, colour){
        this._manufacturer = manufacturer
        this._model = model
        this._colour = colour
    }
    get accelerate (){
            return `${this._manufacturer}, ${this._model} has an acceleration of 7s`
        }
    turning (direction){
        if (direction === "left"){
            console.log ("turning left")
        } else if(direction === "right"){
            console.log("turning right")
        } else {
            console.log("straight ahead!")
        }
        }
    }

let car1 = new car ("BMW", "1 Series", "Black")
let car2 = new car ("Mercedes", "A Class", "White")
let car3 = new car ("Telsa", "Model S", "Red")
// console.log (car1, car2, car3)
// console.log(car1._manufacturer)
console.log(car1.accelerate)
car1.turning()

// functions for accelerate, brake, turning and beeping
// bmw accelerate 7s brake ABS 




// BENS EXAMPLE 


// class Car {
//     constructor(color, model, manu) {
//       this.color = color
//       this.model = model
//       this.manu = manu
//     }
  
//     accelerating() {
//       console.log("speeding up")
//     }
  
//     turning(direction) {
//       if (direction === "left") {
//         console.log("turning left")
//       } else {
//         console.log("turning right")
//       }
//     }
//   }
  
//   let polo = new Car("Black", "Polo", "VW")
  
//   polo.accelerating()



class Meal {
    constructor(name, price){
        this.name = name
        this.price = price

    }
}

class Dessert extends Meal{
    constructor(){

    }
}

class Main extends Meal {

}

class Started extends Meal{
    
}