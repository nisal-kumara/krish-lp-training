const express = require("express");
const binarySearch = require("./binarySearch");
const linearSearch = require("./linearSearch");

const app = express();

app.get("/", (req, res) => {
    res.send("<h2>Binary Search result</h2>" + binarySearch);
})

app.get("/linear", (req, res) => {
    res.send("<h2>Linear Search result</h2>" + linearSearch);
})

app.listen(3000, () => console.log("Server started on Port 3000"));