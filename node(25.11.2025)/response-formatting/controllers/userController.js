const response = require("../utils/responseFormatter");

// Get all users
exports.getUsers = (req, res) => {
  const users = [
    { id: 1, name: "Suba" },
    { id: 2, name: "Priya" }
  ];

  return response.success(res, "Users fetched successfully", users);
};


// create user
exports.createUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return response.error(res, "Name is required", 422);
  }

  return response.success(res, "User created successfully", { id: 3, name });
};
