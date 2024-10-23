const errorHandler = (res, error) => {
  const errorMessage = error.message || "An unexpected error occurred.";
  res.status(400).json({
    success: false,
    message: errorMessage,
  });
};

module.exports = errorHandler;
