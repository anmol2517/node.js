const http = require("http");

// handler function - to create a request listener name function
 
const myServer = http.createServer((req, res) => {
   //  console.log("New request received");
   
   console.log(req.headers);  // header like extra information requests

    res.end("Hello From Server");
});

myServer.listen(8000,() => console.log("Server Started!"));

/*

    TERMINAL--------------
    
        host: 'localhost:8000'
        many more request server -- or client region

*/
