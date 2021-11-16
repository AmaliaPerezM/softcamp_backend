const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("hola mundo"));
app.get("/hola", (req, res) => res.send("hola gente"));

app.listen(4000, () => console.log("listening in port 4000"))