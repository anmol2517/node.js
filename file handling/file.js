/*
        fs stands for file system
        ./  means  current directory
         
*/

const fs = require("fs")

// synchronous

fs.writeFileSync("./intro-file-handling.html", "Hello Universe! (Sync)")
fs.writeFileSync("./testing-file-handling.txt", "Hello World! (Sync)")
fs.writeFileSync("./demo-file-handling.txt", "Hello Bharat! (Sync)")


// asynchronous  only add a call backk function just in case any error then we got it "{}"

fs.writeFileSync("./test-file-handling.html", "Hello Universe! (Async)", (err) => {});
fs.writeFileSync("./start-file-handling.txt", "Hello World! (Async)", (err) => {});
fs.writeFileSync("./begin-file-handling.txt", "Hello Bharat! (Async)", (err) => {});


const reult = fs.readFileSync("./contact.txt", "utf-8")
console.log(result)
 