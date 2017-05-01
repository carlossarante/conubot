const exec = require('child_process').exec;

const execute = function (command, callback) {
  exec(command, (err, stdout, stderr) => {
    if (! err){
      callback(true);
    } else {
      callback(false);
    }
  });
};


module.exports = {
  execute: execute
}
