(function() {
  var path = require("path");
  var express = require('express');
  var router = express.Router();
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var timeout = require('connect-timeout');
  var app = express();
  // 数组,字符串,数字等工具函数

  global._ = require('lodash');
  global.reqsys = require;
  global.config = {
    baseDir: __dirname
  };
  // promise的流控
  global.bbd = require('bluebird');

  global.reqlib = function(packageName) {
    console.log(">>>>>>>>>>>> " + path.join(global.config.baseDir, "libs", packageName + ".js"));
    return require(path.join(global.config.baseDir, "libs", packageName + ".js"));
  };



  var dynRouter = require('./dynamic-router.js');
  var errHandle = require('./middle/errorhandle.js');
  var defaultHandle = require('./middle/default.js');
  var wechat = require('./handle/wechat.js');
  dynRouter.init(router);


  // 基本的middlewware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use(timeout('30s'))

  app.use('/', dynRouter.handleManger);
  app.use('/wechat', wechat);

  app.use(defaultHandle);
  app.use(errHandle);
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
