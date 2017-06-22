(function() {
  console.log("dynamic load handle");
  var dynRouter = false;

  var routerTable = {};

  function init(router) {
    dynRouter = router;
  }

  function handleManger(req, res, next) {
    console.log("req.hostname 加载:  " + req.hostname);
    console.log("req.body :  " + JSON.stringify(req.body));
    console.log("req.param :  " + JSON.stringify(req.param));
    next();

  }
  module.exports.handleManger = handleManger;
  module.exports.init = init;
})();
