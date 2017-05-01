const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;

const rtm = require('./bot').rtm;
const channel = require('./bot').channel;
const serviceMonitor = require('./service-monitor');
const recoverService = require('./operations/recover-service');

const AppEvents = serviceMonitor.AppEvents;
const SERVER_EVENTS = serviceMonitor.SERVER_EVENTS;
const services = ['nginx', 'mysql'];


AppEvents.on(SERVER_EVENTS.SERVICE_NOT_RUNNING, (serviceName) => {
  rtm.sendMessage(`Service ${serviceName} is down. Recovering...`, channel);
  recoverService(serviceName);
});

AppEvents.on(SERVER_EVENTS.SERVICE_RECOVERED, (serviceName) => {
  rtm.sendMessage(`Service ${serviceName} is recovered.`, channel);
});

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, function (rtmStartData) {
  console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
});

// you need to wait for the client to fully connect before you can send messages
rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, function () {
  rtm.sendMessage("Conectado al canal, activando monitor de servicios.", channel);
  serviceMonitor.monitor.cronServiceChecker(services);
});

rtm.start();
