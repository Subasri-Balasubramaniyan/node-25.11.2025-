const express = require("express");
const app = express();

app.get("/success", (req, res) => res.status(200).send("200 OK"));
app.post("/create", (req, res) => res.status(201).send("201 Created"));
app.get("/bad", (req, res) => res.status(400).send("400 Bad Request"));
app.get("/unauth", (req, res) => res.status(401).send("401 Unauthorized"));
app.get("/forbidden", (req, res) => res.status(403).send("403 Forbidden"));
app.get("/notfound", (req, res) => res.status(404).send("404 Not Found"));
app.get("/error", (req, res) => res.status(500).send("500 Internal Server Error"));

app.listen(3000, () => console.log("Server running on port 3000"));
