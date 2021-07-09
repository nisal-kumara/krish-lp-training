const express = require('express');
const actors = require('./data/actors.json');

const app = express();

//get all actors
app.get("/actors", (req, res) => {
    res.send(actors)
})

//get an actor by ID
app.get("/actors/:id", (req, res) => {
    res.send(actors.filter(dir => {
        return dir.id == req.params.id
    })[0])
})
app.listen(3000, () => console.log("Server is running on 3000"))