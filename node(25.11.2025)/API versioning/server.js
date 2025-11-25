const express = require("express");
const app = express();

// Import routes
const userRoutesV1 = require("./routes/userRoutes.v1");
const userRoutesV2 = require("./routes/userRoutes.v2");

// Use versioned routes
app.use("/api/v1", userRoutesV1);
app.use("/api/v2", userRoutesV2);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
