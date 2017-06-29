(function() {
  var Elasticsearch = require('elasticsearch');
  var path = require("path");
  var mmh3 = require('murmurhash3');
  var utils = global.reqlib("util");

  var newinstance = function() {
    var instance = new Elasticsearch.Client({
      host: 'localhost:9200',
      log: 'warning',
      requestTimeout: 30000,
      maxSockets: 30
    });
    return instance;
  };
  var _instance = null;

  function instance() {
    if (!_instance) {
      _instance = newinstance();
    }
    return _instance;
  }
  module.exports.instance = instance;

})();
