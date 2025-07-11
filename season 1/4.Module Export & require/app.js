// const calculateSum = require("./calculate.js")  // it will immediately print x

// const obj = require("./calculate.js")

//const {x, calculateSum} = require("./calculate.js") // Can be done using oj destructuring

//import { calculateSum } from "./calculate.js"

//calculateSum(5, 10)

// console.log(obj.x) 
// obj.calculateSum(5, 10)

const {calculateSum, calculateMultiply} = require("./calculate/")    //for app.js calculate is a new module

const data = require("./data.json") //  we can directly import json

console.log("We are learning Module exports")
console.log(data)

calculateMultiply(13, 6)

calculateSum(5, 10)


