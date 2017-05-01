const RtmClient = require('@slack/client').RtmClient;
const channel = process.env.SLACK_DEFAULT_CHANNEL;
const bot_token = process.env.SLACK_TOKEN;
const rtm = new RtmClient(bot_token);

module.exports = {
  rtm: rtm,
  channel: channel
};
