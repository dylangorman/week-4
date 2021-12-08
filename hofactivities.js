// ACTIVITY ONE 
let greet = function() {console.log("hello from Code Nation")}
greet()
function runFiveTimes(f){
for (let i = 1; i <5; i ++){
    f()
}
}
runFiveTimes(greet)


// ACTIVITY TWO 

const addUp = (num1, num2) => {
    return num1 + num2
}
const multiplyByTwo = (num1) => {
    return num1* 2
}
// add(1,2)

// function callFiveTimes(func){
// for (let i = 1; i<5; i ++){
//     func()

// }
// callFiveTimes(sum)


// ACTIVITY 3 
const array = [1, 2, 3, 4, 5];
const result = array.map(x => x * 3);
console.log(result);


// ACTIVITY 4