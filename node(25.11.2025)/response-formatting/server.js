const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json()); // Required for reading JSON request body

app.use("/api", userRoutes);   /*  All routes start with /api */

app.listen(3000, () => console.log("Server running on port 3000"));
