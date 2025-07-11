const fs = require("fs")

const a = 20
const startTime = new Date()

setImmediate(() => console.log("SetImmediate after time", new Date() - startTime))

setTimeout(() => {
    console.log("Timer expired after time", new Date() - startTime)
}, 0)

fs.readFile("data.json", "utf-8", () => {
    console.log("File reading cb after time", new Date() - startTime)
})

function printA(){
    console.log(a)
    console.log("Consoling a after time", new Date() - startTime)
}

printA()

console.log("Last line of code")

// Consoling a after time 12
// Last line of code
// Timer expired after time 13  //first event loop phase(timer phase) -> timer, setInterval
// SetImmediate after time 13   //third event loop phase(check phase) -> setImmediate callback
// File reading cb after time 15    //second event loop phase(poll phase) -> IO cb, incoming connections, API calls, fs, crypto,
                                    //https.get
                                    //though this is 2nd phase, since file is big it will take certain time to complete and put 
                                    //in cb queue. So during 2nd cycle event loop will push this cb