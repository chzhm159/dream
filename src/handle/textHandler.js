(function() {

  var ES = global.reqlib("es");
  // console.log(" 在 textHandler 中 global : " + process.cwd());
  // console.log("__dirname: " + __dirname);
  // console.log("global.config: " + global.config);
  // console.log("global.reqlib: " + global.reqlib);
  function getQuery(query) {
    query = query || {};
    var base_query = {
      "index": "dream",
      "type": "explain",
      "from": 0,
      "size": 5,
      "sort": [],
      "body": {
        "query": {
          "bool": {
            "must": [{
              "match_all": {}
            }],
            "must_not": [],
            "should": []
          }
        }
      }
    };
    if (!_.isEmpty(query.search)) {
      base_query.body.query.bool.must = [{
        "query_string": {
          "fields": ["text", "tags"],
          "query": query.search
        }
      }];
    }
    if (!_.isEmpty(query.stype)) {
      base_query.body.query.bool.must.push({
        "term": {
          "type": query.stype
        }
      });
    }
    return base_query;
  }

  function getType(type) {
    var map = {
      "xiandai": "通俗",
      "gudian": "古籍",
      "xinli": "心理"
    };
    var name = map[type];
    if (name) {
      return name;
    } else {
      return '通俗';
    }
  }
  var reg = /www\.zgjm\.org/g;
  function rmTerms(text){
    return text.replace(reg, "");
  }
  function resultHandle(result) {
    // console.log(JSON.stringify(result, null, 2));
    var ret = "";
    if (!_.isEmpty(result.hits) && result.hits.hits.length > 0) {
      _.each(result.hits.hits, function(v, k, l) {
        var source = v._source;
        var text = rmTerms(source.text);
        ret += "[" + getType(source.type) + "] " +text+ '\n';
      });
    } else {
      ret = '本条内容无法正常解释,请换个关键词重试吧';
    }
    return ret;
    // console.log(JSON.stringify(ret, null, 2));
  }

  function handle(req, res, next, message) {
    var query = {
      search: message.Content
    };
    var q = getQuery(query);
    // console.log(JSON.stringify(q, null, 2));
    return ES.instance().search(q).then(resultHandle).catch(function(err) {
      console.log('数据库查询失败: ', err);
      return '本条内容无法正常解释,请换个关键词重试吧';
    });
  }
  module.exports = handle;

})();