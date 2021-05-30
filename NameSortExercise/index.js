const express = require("express");
const nameSortEx = require("./nameSortEx");

const app = express();

app.get("/", (req, res) => {
    res.send(nameSortEx);
})

app.listen(3000, () => console.log("Server started on Port 3000"));