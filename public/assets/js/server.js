// Dependecies
const express = require("express");
const path = path("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes for AJAx calls
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"))
});



// Server listens to PORT
app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});
