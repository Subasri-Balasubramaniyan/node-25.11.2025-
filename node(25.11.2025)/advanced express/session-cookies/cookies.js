const express = require("express");
const session = require("express-session");

const app = express();
/* using session middleware */
app.use(session({
  secret: "mySecretKey",
  resave: false,
  saveUninitialized: true
}));

app.get("/", (req, res) => {
  req.session.username = "Subasri";
  res.send("Session stored!");
});

app.get("/check", (req, res) => {
  res.send("Session value: " + req.session.username);
});

app.listen(3000,()=>(console.log("server is running")))
