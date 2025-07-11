const fs = require("fs")

const a = 100

const startTime = new Date()

setImmediate(() => console.log("Set Immediate after ", new Date() - startTime))

Promise.resolve("Promise").then(() => console.log("promise resolved after ", new Date() - startTime))

fs.readFile("./data.json", "utf-8", () => {
    console.log("File read after ", new Date() - startTime)
})

setTimeout(() => console.log("Timer expired after ", new Date() - startTime), 0)

process.nextTick(() => console.log("This is next Tick after ", new Date() - startTime)) // Given most priority by event loop

function printA(){
    console.log("a = ", a)
    console.log("a is printed after", new Date() - startTime)
}

printA()

console.log("End of file after ", new Date() - startTime)

// a =  100
// a is printed after 20
// End of file after  20
// This is next Tick after  21
// promise resolved after  21
// Timer expired after  22
// Set Immediate after  22
// File read after  24
