const checkUbuntuProcess = function (consoleOutput) {
  let regexChecker = /\w+ start\/running, process +\d+/;
  let regexCheckerModern = /Active: active/gm;
  return regexChecker.test(consoleOutput) || regexCheckerModern.test(consoleOutput);
};

const checkCentOSPProcess = function (consoleOutput) {
  let regexChecker = /\w+ \(pid +\d+\) is running.../;
  return regexChecker.test(consoleOutput);
};

exports.processCheck = function (consoleOutput) {
  return checkCentOSPProcess(consoleOutput) || checkUbuntuProcess(consoleOutput);
};
