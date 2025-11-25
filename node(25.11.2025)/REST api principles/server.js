const express = require("express");
const app = express();
app.use(express.json());

// Temporary in-memory data
let books = [
  { id: 1, title: "Book One" },
  { id: 2, title: "Book Two" }
];

// ========================
// GET → Read all books
// ========================
app.get("/api/books", (req, res) => {
  res.status(200).json({
    message: "Books fetched successfully",
    data: books
  });
});

// ========================
// POST → Create a new book
// ========================
// POST → Create a new book
app.post("/api/books", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  // Generate continuous ID
  const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1;

  const newBook = {
    id: newId,
    title
  };

  books.push(newBook);

  res.status(201).json({
    message: "Book created",
    data: newBook
  });
});


// ========================
// PUT → Update a book
// ========================
app.put("/api/books/:id", (req, res) => {
  const { id } = req.params;  /* req.params = stores values from the URL. */
  const { title } = req.body;  /* req.body contains the JSON you send in Postman. */

  const book = books.find(b => b.id == id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  book.title = title || book.title;
  /* This means:
If title is provided, update it
If title is missing, keep the old title */

  res.status(200).json({
    message: "Book updated",
    data: book
  });
});

// ========================
// DELETE → Remove a book
// ========================
app.delete("/api/books/:id", (req, res) => {
  const { id } = req.params;

  const index = books.findIndex(b => b.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(index, 1);

  res.status(204).send(); // No content
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
