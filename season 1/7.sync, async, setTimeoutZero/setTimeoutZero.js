console.log("We are learning settimeout zero")

var a = 984854858557
var b = 948754865456495

setTimeout(() => {
    console.log("Set time out 0 - call me right now")
}, 0)
//though its settimout is 0, it will be printed after multiplication
//libuv will be able to push to cs only when cs is empty(without any ec)
//The callback function from  setTimeout(0)  is added 
// to the event queue. However, it won't be executed until the current call stack 
// is empty. This means that even if you specify a 0-millisecond delay, the 
// callback will only execute after the global execution context is done

function multiplyFn(x, y){
    return x * y
}

console.log("Multiplication of a and b is: ", multiplyFn(a, b))

// We are learning settimeout zero
// Multiplication of a and b is:  9.343858388244219e+26
// Set time out 0 - call me right now