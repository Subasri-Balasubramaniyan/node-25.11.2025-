const express = require("express");
const app = express();
app.use(express.json());

const users = [{ id: 1, name: "Alice" }];

// GET (READ)
app.get("/api/users", (req, res) => {
  res.json(users);
});

// POST (CREATE)
app.post("/api/users", (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };  /* use timestamp */
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (UPDATE)
app.put("/api/users/:id", (req, res) => {
  const id = +req.params.id;
  const user = users.find(u => u.id === id);
  user.name = req.body.name;
  res.json(user);
});

// DELETE (REMOVE)
app.delete("/api/users/:id", (req, res) => {
  const id = +req.params.id;
  const index = users.findIndex(u => u.id === id);
  users.splice(index, 1);
  res.sendStatus(204);
});

app.listen(3000, () => console.log("Server running"));
