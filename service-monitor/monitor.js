const exec = require('child_process').exec;

const parseOutput = require('./output-parser').parseOutput;
const serviceStatusHandler = require('./event-handlers').serviceStatusHandler;

const processCheck = function (serviceName, callback) {
  exec(`service ${serviceName} status`, (err, stdout, stderr) => {
    serviceStatusHandler(serviceName, parseOutput(stdout));
  });
};

const cronServiceChecker = function (services, interval = 5000, callback) {
  setInterval(() => {
    services.forEach((service) => {
      processCheck(service);
    });
  }, interval);
};

module.exports = {
  cronServiceChecker: cronServiceChecker
};
