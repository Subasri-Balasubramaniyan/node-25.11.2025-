// A reusable response formatter


// Success response
exports.success = (res, message, data = {}) => {
  return res.status(200).json({
    status: "success",
    message: message,
    data: data,
  });
};
// Error response 
exports.error = (res, message, code = 400) => {
  return res.status(code).json({
    status: "error",
    message: message,
  });
};
