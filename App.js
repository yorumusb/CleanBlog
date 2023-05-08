const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("selam");
});

const port = 3000;

app.listen(port, () => {
    console.log("sunucu başladı");
});
