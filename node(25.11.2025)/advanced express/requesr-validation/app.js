const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();

app.use(express.json());  /* middleware to read json */

app.post(
  "/register",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 5 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("Registration successful!");
  }
);

app.listen(3000,()=>console.log("server is running"));
