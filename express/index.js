const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

function myHandler(req, res) {
    const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.method} ${req.url} - Http Method request received\n`;

    console.log(req.headers);

    fs.appendFile("http.txt", log, (err) => {
        const myUrl = url.parse(req.url, true);

        switch (myUrl.pathname) {
            case "/":
                if(req.method === "GET") res.end("HomePage");
                break;

            case "/about":
                const username = myUrl.query.myname;
                res.end(`hi, ${username}`);
                break;

            case "/search":
                const search = myUrl.query.search_query;
                 res.end("Here are your results for " + search);
                break;
        }
    });
});
}


const myServer = http.createServer(myHandler);
myServer.listen(8011, () => console.log("Server running on port 8011"));