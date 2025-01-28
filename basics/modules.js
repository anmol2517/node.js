function add (a , b) {
    return a + b;
}


//   This line access to the another modules   >>   [ modules means files (modules/file) ]
//   console.log(add( 30, 40));

//   This file access in mode.js

//   All code divided into the small partition then we call the modular program


function sub (a , b) {
    return a - b;
}


//   exports the function

// exports.add  =  (a, b) => a + b;
// exports.sub  =  (a, b) => a - b;




module.exports = { add, sub };
