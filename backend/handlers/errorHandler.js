const errorHandler = (error, req, res, next) => {
  if (error) {
    if (res.headersSent) {
      return next(error);
    }
    const errorMessage = error.message || error;
    res.status(400).json({
      status: "FAILED",
      error: errorMessage,
    });
  } else {
    next();
  }
};
module.exports = errorHandler;
