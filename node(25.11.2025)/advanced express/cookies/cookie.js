const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());   /* middleware to enable cookir reading */

app.get("/set", (req, res) => {
  res.cookie("username", "Subasri", { maxAge: 60000 });
  res.send("Cookie is set!");
});

app.get("/get", (req, res) => {
  res.send("Cookie value: " + req.cookies.username);
});

app.listen(3000,()=>(console.log("server is running")))
