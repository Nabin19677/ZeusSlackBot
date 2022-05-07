import { App } from "../SlackApp.js";

App.command("/knowledge", async ({ command, ack, say }) => {
  try {
    await ack();
    say("YAY! this command is working!");
  } catch (e) {
    console.log(e.message);
  }
});

export default App;
