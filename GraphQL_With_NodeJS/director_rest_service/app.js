const express = require('express');
const directors = require('./data/directors.json');

const app = express();

//get all directors
app.get("/directors", (req, res) => {
    res.send(directors)
})

//get a director by ID
app.get("/directors/:id", (req, res) => {
    res.send(directors.filter(dir => {
        return dir.id == req.params.id
    })[0])
})
app.listen(3000, () => console.log("Server is running on 3000"))