const AppEvents = require('../service-monitor').AppEvents;
const execute = require('./helpers').execute;
const SERVER_EVENTS = require('../service-monitor').SERVER_EVENTS;


const recoverService = function (serviceName, retries = 0) {
  if (retries < 3) {
    execute(`service ${serviceName} start`, (recovered) => {
      if (recovered) {
        AppEvents.emit(SERVER_EVENTS.SERVICE_RECOVERED, serviceName);
      } else {
        console.log(`Attempting to start ${serviceName} again, ${retries} retries`);
        recoverService(serviceName, retries++)
      }
    });
  }
};

module.exports = recoverService;
