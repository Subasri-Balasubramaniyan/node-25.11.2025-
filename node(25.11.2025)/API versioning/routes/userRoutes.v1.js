const express = require("express");
const router = express.Router();

// Version 1 API
router.get("/users", (req, res) => {
  res.json({ version: "v1", users: ["Abi", "Banu"] });
});

module.exports = router;
