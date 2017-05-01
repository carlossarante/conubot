const checkUbuntuProcess = function (consoleOutput) {
  const regexChecker = /\w+ start\/running, process +\d+/;
  const regexCheckerModern = /Active: active/gm;
  return regexChecker.test(consoleOutput) || regexCheckerModern.test(consoleOutput);
};

const checkCentOSPProcess = function (consoleOutput) {
  const regexChecker = /\w+ \(pid +\d+\) is running.../;
  return regexChecker.test(consoleOutput);
};

exports.parseOutput = function (consoleOutput) {
  return checkCentOSPProcess(consoleOutput) || checkUbuntuProcess(consoleOutput);
};
