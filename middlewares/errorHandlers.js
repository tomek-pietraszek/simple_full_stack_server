import createError from "http-errors";

export const routeNotFound = (req, res, next) => {
  throw createError(404, "Route was not found");
};

export const globalErrorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    statusCode: err.status,
    message: err.message,
    stack: err.stack,
  });
};
