(function() {
  function defaultHandle(req, res, next) {
    if (res.headersSent) {
      return next(err);
    }
    res.status(200);
    res.end('<html> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> </head> <body> <p>啥都没有呢,要是嫌慢,就去帮帮那个程序猿</p> <a href="mailto:chzhm159@gmail.com?subject=建议&body=您好,我可以给你提点建议. 例如: ">催他</a> </body> </html>\r\n');
    next();
  }
  module.exports = defaultHandle;
})();
