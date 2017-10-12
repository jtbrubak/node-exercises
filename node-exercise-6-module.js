var fs = require('fs');

module.exports = function(path, ext, callback) {
  fs.readdir(path, function(err, list) {
    if (err) { return callback(err); }
    var newList = list.filter((file) => file.split('.')[1] === ext);
    callback(null, newList);
  });
}
