// Create middleware for global error handling

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const errorMessage =
    res.statusCode === 404 ? "Function not found" : err.message;
  res.status(statusCode);
  res.json({
    message: errorMessage,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  next(err);
};

module.exports = { notFound, errorHandler };
