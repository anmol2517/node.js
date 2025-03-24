const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.method} ${req.url} - Http Method request received\n`;

    console.log(req.headers);

    fs.appendFile("http.txt", log, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end("Internal Server Error");
        }

        const myUrl = url.parse(req.url, true);

        switch (myUrl.pathname) {
            case "/":
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("Run/Heat - Handling the URL localhost");
                break;

            case "/about":
                if (myUrl.query.myname) {
                    res.writeHead(200, { "Content-Type": "text/plain" });
                    res.end(`Hey, ${myUrl.query.myname}`);
                } else if (myUrl.query.search_query) {
                    res.writeHead(200, { "Content-Type": "text/plain" });
                    res.end("URL results for " + myUrl.query.search_query);
                } else {
                    res.writeHead(400, { "Content-Type": "text/plain" });
                    res.end("Missing query parameter");
                }
                break;

            default:
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("URL Not Found");
        }
    });
});

myServer.listen(8007, () => console.log("Server running on port 8007"));


const fs = require("fs");
const url = require("url");const fs = require("fs");
const url = require("url");
