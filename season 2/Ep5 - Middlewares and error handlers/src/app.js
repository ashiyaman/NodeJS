const express = require("express")

const app = express()

// app.get("/admin/getAllData", (req, res) => {
//     //logic of checking if request is autorized
//     const token = "xyzaaa"
//     const isAuthorized = token === "xyz"
//     if(isAuthorized){
//         res.send("All data sent")
//     }
//     else{
//         res.status(401).send("Unauthorized access")
//     }
// })

// app.delete("/admin/deleteData", (req, res) => {
//     //logic of checking if request is autorized
//     const token = "xyzaaa"
//     const isAuthorized = token === "xyz"
//     if(isAuthorized){
//         res.send("Data deleted")
//     }
//     else{
//         res.status(401).send("Unauthorized access")
//     }
// })

//  For all methods, we have to keep checking if the user is admin(ie. authorized / not)
// Hence we use middleware(middlewares are request handlers that are in between before the last requst handlers)

// app.get("/admin/getAllData", (req, res) => {
//     //logic of checking if request is autorized
//     const token = "xyzaaa"
//     const isAuthorized = token === "xyz"
//     if(isAuthorized){
//         res.send("All data sent")
//     }
//     else{
//         res.status(401).send("Unauthorized access")
//     }
// })

// app.delete("/admin/deleteData", (req, res) => {
//     //logic of checking if request is autorized
//     const token = "xyzaaa"
//     const isAuthorized = token === "xyz"
//     if(isAuthorized){
//         res.send("Data deleted")
//     }
//     else{
//         res.status(401).send("Unauthorized access")
//     }
// })

app.use("/admin", (req, res, next) => {
    console.log("Admin is getting checked!!")
    const token = "xyz"
    const isAuthorized = token === "xyz"
    if(!isAuthorized){
        res.status(401).send("Unauthorized access")
    }
    else{
        next()
    }
})

app.get("/admin/getAllData", (req, res) => {
    res.send("All data sent")
})

app.delete("/admin/deleteData", (req, res) => {
    res.send("Data deleted")
})

app.get("/", (req, res) => {
    res.send("Welcome to server")
})

app.listen(7777, () => {
    console.log("Server is running on port 7777")
})