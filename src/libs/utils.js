(function() {
  var path = require("path");
  var mmh3 = require('murmurhash3');
  var seedrandom = require("seedrandom");

  var _idtester = /^[0-9a-f]{32}$/i;

  function isId(str) {
    return _idtester.test(str);
  }

  function key2id(key) {
    return mmh3.murmur128HexSync(key);
  }

  function id2Path(id) {
    var l = 32 / 4;
    var parts = new Array(9);
    for (var i = 0; i < l; ++i) {
      parts[i + 1] = id.slice(i * 4, i * 4 + 4);
    }
    parts[0] = parts[1].slice(0, 2);
    parts[1] = parts[1].slice(2, 4);
    return path.join.apply(path, parts);
  }

  function getRandomNum(precision) {
    if (!precision) precision = 100000000;
    seedrandom(uuid.v4(), {
      global: true
    });
    return Math.round(Math.random() * precision);
  }

  function getUUID(key) {
    return key2id(key).replace(/-/g, '');
  }
  module.exports.uuid = getUUID;
  module.exports.getRandomNum = getRandomNum;
  module.exports.key2id = key2id;
  module.exports.isId = isId;
  module.exports.id2Path = id2Path;
  module.exports.getUUID = getUUID;

})();
