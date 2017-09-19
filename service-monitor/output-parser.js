-const servicesStatusRegex = require('./servicesStatusRegex');

const checkProcessStatusString = function (consoleOutput) {
  return servicesStatusRegex.test(consoleOutput);
};

exports.parseOutput = function (consoleOutput) {
  return checkProcessStatusString(consoleOutput);
};
