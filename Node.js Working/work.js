const fs = require("fs")

//   Give 'os' information

const os  = require('os');   
console.log(os.cpus().length);

// Blocking the Request

console.log("visual studio");   //  >>  Testing Command Step 

const result = fs.readFileSync("symbol.txt", "utf-8");
console.log(result);

?/  >>  Testing Command Step 
console.log("tools and tech");   


// Non - Blocking the Request

fs.readFileSync("symbol.txt", "utf-8", (err, result1 ) => {
    console.log(result1);
});

console.log("node.js server");   //  >>  Testing Command Step 

