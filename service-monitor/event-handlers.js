const exec = require('child_process').exec;
const AppEvents = require('./server-events').AppEvents;
const SERVER_EVENTS = require('./server-events').SERVER_EVENTS;

const serviceStatusHandler = function (serviceName, service_status) {
  if (!service_status) {
    AppEvents.emit(SERVER_EVENTS.SERVICE_NOT_RUNNING, serviceName);
  }
};

module.exports = {
  serviceStatusHandler: serviceStatusHandler
};
