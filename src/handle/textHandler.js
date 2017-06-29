(function() {
  // 
  // var ES = global.reqlib("es");
  console.log(" 在 textHandler 中 global : ");
  console.log(reqlib);

  function handle(req, res, next) {
    ES.instance().client.ping().then(function(body) {
      console.log("pong  body : " + JSON.stringify(body));
    });
  }
  module.exports = [handle /*, wechat*/ ];

})();
