import { App } from "../SlackApp.js";

App.message(/hey/gi, async ({ command, say }) => {
  try {
    say("Yaaay! that command works!");
  } catch (error) {
    console.log("err");
    console.error(error);
  }
});

export default App;
