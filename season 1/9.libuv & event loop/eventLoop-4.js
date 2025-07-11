const fs = require("fs")

const startTime = new Date()

setImmediate(() => console.log("Set Immediate 1 after ", new Date() - startTime))

setTimeout(() => console.log("Timer 1 expired after ", new Date() - startTime))

Promise.resolve("Promise").then(() => console.log("Promise resolved after ", new Date() - startTime))

fs.readFile("./data.json", "utf-8", () => {
    setTimeout(() => console.log("Timer 2 expired after ", new Date() - startTime))

    process.nextTick(() => console.log("Next tick 1 after ", new Date() - startTime))

    setImmediate(() => console.log("Set immediate 2 after ", new Date() - startTime))

    console.log("File read after ", new Date() - startTime)
})

process.nextTick(() => {
    process.nextTick(() => console.log("next tick 2 after ", new Date() - startTime))
    Promise.resolve("Promise").then(() => console.log("promise 2 resolved after ", new Date() - startTime))
    console.log("Tick 3 after ", new Date() - startTime)
})

console.log("Last line after ", new Date() - startTime)

// Last line after  1
// Tick 3 after  15
// next tick 2 after  16
// Promise resolved after  16
// promise 2 resolved after  17
// Timer 1 expired after  17
// Set Immediate 1 after  18
// File read after  20
// Next tick 1 after  21
// Set immediate 2 after  22
// Timer 2 expired after  23