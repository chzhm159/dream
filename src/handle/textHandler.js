(function() {
  // 
  var ES = global.reqlib("es");
  // console.log(" 在 textHandler 中 global : " + process.cwd());
  // console.log("__dirname: " + __dirname);
  // console.log("global.config: " + global.config);
  // console.log("global.reqlib: " + global.reqlib);


  function handle(req, res, next) {
    ES.instance().ping().then(function(body) {
      console.log("pong  body : " + JSON.stringify(body));
      res.end('es 连通成功\r\n');
    }, function(error) {
      console.log(error);
      res.end('失败\r\n');
    });
  }
  module.exports = [handle /*, wechat*/ ];

})();
