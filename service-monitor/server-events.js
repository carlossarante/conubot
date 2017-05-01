const EventEmitter = require('events');

const SERVER_EVENTS = {
  LOW_MEMORY: 'low_memory',
  SERVICE_NOT_RUNNING: 'service_not_running',
  SERVICE_RECOVERED: 'service_recovered'
};

const AppEvents = new EventEmitter();

module.exports = {
  AppEvents: AppEvents,
  SERVER_EVENTS: SERVER_EVENTS
};
