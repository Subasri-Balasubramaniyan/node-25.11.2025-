const express = require("express");
const router = express.Router();

// Version 2 API - new features added
router.get("/users", (req, res) => {
  res.json({
    version: "v2",
    users: [
      { id: 1, name: "Abi", age: 25 },
      { id: 2, name: "Banu", age: 30 }
    ]
  });
});

module.exports = router;
