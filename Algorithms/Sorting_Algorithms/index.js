const express = require("express");
const bubbleSort = require("./bubbleSort");
const quickSort = require("./quickSort");
const selectionSort = require("./selectionSort");
const mergeSort = require("./mergeSort");

const app = express();

app.get("/", (req, res) => {
    res.send("<h2>Bubble Sort result</h2>" + bubbleSort);
})

app.get("/quick", (req, res) => {
    res.send("<h2>Quick Sort result</h2>" + quickSort);
})

app.get("/selection", (req, res) => {
    res.send("<h2>Selection Sort result</h2>" + selectionSort);
})

app.get("/merge", (req, res) => {
    res.send("<h2>Merge Sort result</h2>" + mergeSort);
})

app.listen(3000, () => console.log("Server started on Port 3000"));