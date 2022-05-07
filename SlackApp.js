import bolt from "@slack/bolt";

const App = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_LEVEL_TOKEN,
  port: process.env.PORT || 3000,
});

export { App };
