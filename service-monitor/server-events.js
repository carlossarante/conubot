const keyMirror = require('keyMirror');
const EventEmitter = require('events');

const SERVER_EVENTS = keyMirror({
  LOW_MEMORY
  SERVICE_NOT_RUNNING
  SERVICE_RECOVERED
});

const AppEvents = new EventEmitter();

module.exports = {
  AppEvents: AppEvents,
  SERVER_EVENTS: SERVER_EVENTS
};
