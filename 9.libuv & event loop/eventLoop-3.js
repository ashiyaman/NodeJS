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

process.nextTick(() => console.log("Tick 2 after ", new Date() - startTime))

console.log("Last line after ", new Date() - startTime)

// Last line after  1
// Tick 2 after  13
// Promise resolved after  14
// Timer 1 expired after  14
// Set Immediate 1 after  15
// File read after  16
// Next tick 1 after  17
// Set immediate 2 after  17    // sice after resting in poll phase event loop will go to check phase not to timer phase
// Timer 2 expired after  17