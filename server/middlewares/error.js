export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCOde === 200 ? 500 : res.statusCode;

  return res.status(statusCode).json({
    success: false,
    error: err.message,
  });
};