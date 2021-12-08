// const name = "Dylan"  //variable "DYlan" Global Memory
// const age = 41 
// const drinks = ["coffee", "IPA", "Orange Juice"]
// const children = {
//     name:"Phoebee",
//     age: 7,
//     sex: "female"
// }

// console.log(name)

// const someNum = 30  //global memory
// const addOne = (num) => {   //global memory
//     const result = num + 1  //global memory
//     return result

// }
// console.log ("Hello World")   //global execution context
// const newNum = addone (4)



// let name = "MIke"

// function subtract(num1){
//     return num1 - 4

// }
// console.log(name)
// const result = subtract(4)
// console.log(result)


const addUp = (num1, num2) => {
    return num1 + num2
}

const multiplyByTwo = (num1) => {
    return num1* 2
}

const anotherFunc = () =>{
    let myName = "dan"
const innerFunc = (name) => {
    return `Hello ${name}`
} 
return innerFunc(myName)
}
const  value = anotherFunc()
const result = addUp(2,5)
const final = multiplyByTwo(result)

console.log (value)
console.log (result)
console.log (final)
