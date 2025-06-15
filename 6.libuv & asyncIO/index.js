const fs = require("fs")
const https = require("https")

const a  = 1279099;
const b = 189809808

console.log("Hello, We are learning about libuv and async IO")

const startTime = new Date()
console.log("Time before starting", startTime)

setTimeout(() => {
    console.log("Settimeout is resolved after ", new Date() - startTime )
}, 4000)

https.get("https://restcountries.com/v3.1/name/india", 
    (res) => console.log("We got response after", new Date() - startTime)
)

//This is synchronous fn. ie. it blocks the main thread and v8 doesnt offloads it to libuv
//Should be avoided by programmer (can use readFile instead)
// const fileData = fs.readFileSync("./data.json", "utf-8")
// console.log(fileData)
// console.log("File is read after ", new Date() - startTime)

const fileData = fs.readFile("./data.json", "utf-8", (err, data) => {
    console.log("fileData: ", data)
    console.log("File is read after ", new Date() - startTime)
})


function multiply(a, b){
    return a * b
}

console.log("Multiplication of a and b: ", multiply(a, b))
console.log("Multiplication is done after ", new Date() - startTime)

