const crypto = require("crypto")

process.env.UV_THREADPOOL_SIZE = 2  //  can increase / decrease 

const startTime = new Date()

crypto.pbkdf2("password", "salt", 5000000, 0, "sha512", (err, key) => {
 console.log("Crypto 1 done after", new Date() - startTime)
})

crypto.pbkdf2("password", "salt", 5000000, 0, "sha512", (err, key) => {
 console.log("Crypto 2 done after", new Date() - startTime)
})

crypto.pbkdf2("password", "salt", 5000000, 0, "sha512", (err, key) => {
 console.log("Crypto 3 done after", new Date() - startTime)
})

crypto.pbkdf2("password", "salt", 5000000, 0, "sha512", (err, key) => {
 console.log("Crypto 4 done after", new Date() - startTime)
})

crypto.pbkdf2("password", "salt", 5000000, 0, "sha512", (err, key) => {
 console.log("Crypto 5 done after", new Date() - startTime)
})

crypto.pbkdf2("password", "salt", 5000000, 0, "sha512", (err, key) => {
 console.log("Crypto 6 done after", new Date() - startTime)
})
