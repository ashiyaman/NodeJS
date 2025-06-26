const http = require("http")  // can wite as const http = require("http")                              

const server = http.createServer(function(req, res){    // req, res are objects that has multiple methods

    if(req.url === "/getSecretData"){
        res.end("There is no secret data")
    }
    else{
        res.end("Hello World!!")   //  .end replies back and close connection
    }
    

})  // gives instance of server

server.listen(4000) //  server is ready to listen to requests

//But building server like this for large application is very difficult and not scalable easily
//tough to handle routing
//Hence express
//Express is a wrapper around Node.js -> framework to build server