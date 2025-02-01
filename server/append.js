const http = require("http");
const fs = require("fs");
 
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url}  new request received\n`;

    fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url) {
            case "/": 
                res.end("HomePage");
                break;

            case "/about":
                res.end("I am Anmol");
                break;

            default: 
                res.end("Error Not Found")
        }

        // always using non blocking operations
        
        // res.end("hii, Append File Others");
    });
});

myServer.listen(8001, () => console.log("Server Region"));