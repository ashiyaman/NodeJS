const crypto = require("crypto")    // can write as const crypto = require("node: crypto")  for node's core modules
const https = require("https")
const fs  = require("fs")

console.log("We are learnng async blocking using node's core module - crypto")

var a = 98977662
var b = 67657

//Sync Fn
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512")
console.log("First key is generated with sync fn")
//will not be off loaded to libuv
//will block the main thread

//Async fn
//Password based key derivative fn
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("Second key is generated with async fn")
})
//will be off loaded to libuv
//will not block main thread - thats why it prints at the last after multiplication fn.

setTimeout(() => {
    console.log("Settimeout is resolved")
}, 4000)

https.get("https://restcountries.com/v3.1/name/india", 
    (res) => console.log("We got response")
)

const fileData = fs.readFile("./data.json", "utf-8", (err, data) => {
    console.log("fileData: ", data)
})

function multiplyFn(x, y){
    return x * y
}

console.log("Result of multiplication is: ", multiplyFn(a, b))

// We are learnng async blocking using node's core module - crypto
// First key is generated
// Result of multiplication is:  6696531677934
// fileData:  {
//     "name": "Ashiya",
//     "designation": "Software Developer"
// }
// We got response
// Second key is generated
// Settimeout is resolved