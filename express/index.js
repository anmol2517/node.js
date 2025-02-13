const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.send("Hello From Home Page");
});

app.get("/about", (req, res) =>{
    return res.send("Hello From About Page");
});


app.get("/main", (req, res) =>{
    return res.send(`Hello ${req.query.name}`); //http://localhost:8011/main?name=anmol
});


/*
app.get("/main", (req, res) => {
    console.log(req.query); 
    const name = req.query.name || "Guest";
    const age = req.query.age || "Unknown";
    return res.send(`Hello ${name} or Your Age is ${age}`);
});
*/


/*
app.get("/main", (req, res) => {
    console.log(req.query); 
    const name = req.query.name || "Guest";
    const age = req.query.age || "Unknown";
    return res.send(`Hello ${name} or Your Age is ${age}`);
});
*/

app.listen(8011, () => console.log("Server running on port 8011")); 
