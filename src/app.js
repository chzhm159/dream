(function() {
  var path = require("path");
  var express = require('express');

  var app = express();

  var dynRouter = require('./dynamic-router.js');

  global.config = {
    baseDir: __dirname
  };

  global.reqlib = function(packageName) {
    return require(path.join(global.config.baseDir, "libs", packageName + ".js"));
  };

  global.reqsys = require;


  app.use('/', dynRouter.handleManger);

  app.listen(3000, function() {
    console.log('dream app listening on port 3000!');
  });
  process.on('SIGINT', function() {
    console.log("服务终止信号,启动清理工作");
    setTimeout(function() {
      process.exit(0);
    }, 0);
  });

})();
