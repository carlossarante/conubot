const RtmClient = require('@slack/client').RtmClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;

const rtm = new RtmClient(bot_token);
const channel = process.env.DEFAULT_CHANNEL;
const bot_token = process.env.SLACK_TOKEN;

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, function (rtmStartData) {
  console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
});

// you need to wait for the client to fully connect before you can send messages
rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, function () {
  rtm.sendMessage("Conectado al canal: ", channel);
});

rtm.on(RTM_EVENTS.MESSAGE, function (message) {
  console.log("Hello!", message);
});

rtm.start();
