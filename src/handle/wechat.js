(function() {
  var wechat = require('wechat');
  var textHandler = require('./textHandler.js');

  var config = {
    token: 'c1z5m9',
    appid: 'wx78b1370c631699d9',
    encodingAESKey: 'aZWNnoBUozDikJ9YFj880D97wkzmaw2cFKn0JpuCf06',
    checkSignature: false // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
  };
  var wechat = wechat(config, function(req, res, next) {
    console.log(JSON.stringify(req.weixin, null, 2));
    // 微信输入信息都在req.weixin上
    var message = req.weixin;
    if (message.MsgType === 'device_text') {
      res.reply("呵呵");
      return;
    }
    if (message.FromUserName === 'diaosi') {
      // 回复屌丝(普通回复)
      res.reply('hehe');
    } else if (message.FromUserName === 'text') {
      //你也可以这样回复text类型的信息
      res.reply({
        content: 'text object',
        type: 'text'
      });
    } else if (message.FromUserName === 'hehe') {
      // 回复一段音乐
      res.reply({
        type: "music",
        content: {
          title: "来段音乐吧",
          description: "一无所有",
          musicUrl: "http://mp3.com/xx.mp3",
          hqMusicUrl: "http://mp3.com/xx.mp3",
          thumbMediaId: "thisThumbMediaId"
        }
      });
    } else {
      // 回复高富帅(图文回复)
      res.reply([{
        title: '这次搞个大事情',
        description: '对不起大家了,最近升级中,请静候精彩功能',
        picurl: 'http://d.ifengimg.com/w640_h500/p3.ifengimg.com/a/2017_15/8a67d268508587f_size95_w700_h700.jpg',
        url: '#'
      }]);
    }
  });

  function handle(req, res, next) {
    console.log("wechat req.query :  " + JSON.stringify(req.query));
    console.log("wechat req.body :  " + JSON.stringify(req.body));
    console.log("wechat req.params :  " + JSON.stringify(req.params));
    next();
  };
  module.exports = [handle, textHandler];
})();
