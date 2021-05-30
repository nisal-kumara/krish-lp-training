const express = require("express");
const exercise_01 = require("./exercise_01");
const exercise_02 = require("./exercise_02");
const exercise_03 = require("./exercise_03");
const exercise_04 = require("./exercise_04");

const app = express();

app.set('view engine', 'ejs');

// Exercice 01: A program to find the 3rd largest number from an array
app.get("/", (req, res) => {
    res.render('home', { title: exercise_01.title, result: exercise_01.result });
})
// Exercice 02: A program to count repetition characters from given sentence
app.get("/page02", (req, res) => {
    res.render('home', { title: exercise_02.title, result: exercise_02.result });
})
// Exercice 03: A program to find the missing number from the given sequence
app.get("/page03", (req, res) => {
    res.render('home', { title: exercise_03.title, result: exercise_03.result });
})
// Exercice 04: A program to find, if two given words are Anagram of not
app.get("/page04", (req, res) => {
    res.render('home', { title: exercise_04.title, result: exercise_04.result });
})

app.listen(3000, () => console.log("Server started on Port 3000"));