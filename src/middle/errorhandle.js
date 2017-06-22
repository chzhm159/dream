(function() {
  console.log("error middleware");

  function errorHandler(err, req, res, next) {
    console.log("出现错误");
    if (res.headersSent) {
      return next(err);
    }
    res.status(err.status || 500);
    res.end(err.message + " 错误信息");
    next();
  }
  module.exports = errorHandler;
})();
