/*

https - Encrypted - SSL : Certificate Authority
http - decrypted - None SSL : Certificate Authority

------ https://github.com/anmol2517  :  URL 
https://

Protcol:  
Hypertext
Transfer
Protocol
Secure

------
github.com/anmol2517  :  Domain - User Friendly Name of IP Address of My Server

Path : /about  |  /contact-us  

Query Parameters : ?name=Anmol&age=25
*/

const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.url}  new request received\n`;

    const myUrl = url.parse(req.url);
    console.log(myUrl);


    fs.appendFile("url.txt", log, (err, data) => {
        switch(myUrl.pathname) {
            case "/": 
                res.end("Handling thr URL localhost");
                break;

            case "/about":
                const username = myUrl.query.myname;

                // res.end("Get the URL About Page Parameter");
                
                res.end(`hey, ${username}`)
                break;
            
            case "/about":
                const search = myUrl.query.search_query;
                res.end("Url results for " + search);

            default: 
                res.end("URL Not Found")
        }
    });
});

myServer.listen(8005, () => console.log("URL Handler Started"));
