const exec = require('child_process').exec;

const processCheck = require('./outputParser').processCheck;

exec('service nginx status', function(err, stdout, stderr) {
  processCheck(stdout);
});

exec('service mysql status', function(err, stdout, stderr) {
  processCheck(stdout);
});
