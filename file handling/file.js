/*
        fs stands for file system
        ./   -->>   means  current directory
         
*/


const fs = require("fs")

// synchronous

fs.writeFileSync("./intro-file-handling.html", "Hello Universe! (Sync)")
fs.writeFileSync( /*    "creating a file - using ./"    */ "./testing-file-handling.txt", "Hello World! (Sync)")



// asynchronous  only add a call back function just in case any error then we got it "{}"

fs.writeFile(/*   "creating a file - using ./"     */ "./check-file-handling.html", "Hello INDIA! (Async)", (err) => {});
fs.writeFile("./demo-file-handling.txt", "Hello Anmol.! (Sync)", (err) => {}); 


//  Get or Access the File ( read or access the data inside the File)
//  sync given the result in the variable

const result = fs.readFileSync("./reading.txt", "utf-8")
console.log(result)



//  async  --  error  -- it is not return the result
//  const result = fs.readFile("./reading.txt", "utf-8")
//  console.log(result)

fs.readFile("./reading.txt", "utf-8", (err, result) => {
        if (err) {
                console.log("Error" ,err);
        } else {
                console.log(result); 
        }
});

fs.appendFileSync("./create.txt", `${Date.now()} hii buddy\n`); 

   
// copy file -- one file to another file

fs.cpSync("./create.txt" , "./copy.txt", );


// delete file using Unlink
// fs.unlinkSync("./copy.txt");

// check stat
console.log(fs.statSync("./create.txt"));

// create folder 
fs.mkdirSync("my-docs/a/b", { recursive:  true });


/*

Sync vs Async:

1. Synchronous (Sync):
   - The execution of the code is blocked until the current task completes.
   - Suitable for CPU-bound tasks where tasks depend on each other.
   - Can slow down the application for I/O-bound tasks.

2. Asynchronous (Async):
   - Non-blocking execution allows the program to continue running while waiting for tasks like I/O to complete.
   - Ideal for I/O-bound tasks like file operations, database queries, etc.
   - Uses callbacks, promises, or async/await to handle results.



   ------------   CODE   -------------


Synchronous (Sync):

const fs = require('fs');

let data = fs.readFileSync('file.txt', 'utf8');
console.log(data);  // This will block until the file is read completely
console.log('File reading completed');

----------------------------------------------

Asynchronous (Async):

const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);  // This won't block the rest of the code execution
});

console.log('File reading in progress');

----------------------------------------------


Async with Promises:
const fs = require('fs').promises;

fs.readFile('file.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error(err));

console.log('File reading in progress');




Async with async/await:


const fs = require('fs').promises;

async function readFile() {
    try {
        let data = await fs.readFile('file.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFile();
console.log('File reading in progress');


*/
      