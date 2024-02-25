let a = prompt("Enter First Number: ")
let b = prompt("Enter Operator ")
let c = prompt("Enter Second Number: ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
let ran = Math.random();
console.log(ran);

if(ran > 0.1){
    console.log(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    c = obj[c];
    console.log(`The result is ${eval(`${a} ${b} ${c}`)}`)
}