// Dependecies
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
console.log(path.join(__dirname, "index.html"));
console.log(path.join(__dirname, "notes.html"));
//Routes for AJAx calls
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
});


app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"))
});

// app.get("/api/notes", function(req, res) {
//     return res.json(notes);
// })



// Server listens to PORT
app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});
