// Dependecies
const express = require("express");
const apiRoutes = require("./Routes/apiRoutes");
const htmlRoutes = require("./Routes/htmlRoutes");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
console.log(path.join(__dirname, "index.html"));
console.log(path.join(__dirname, "notes.html"));


// Server listens to PORT
app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});
