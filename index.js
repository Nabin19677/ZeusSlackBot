import "./config.js";
import { App } from "./SlackApp.js";
import "./messages/index.js";
import "./commands/index.js";

(async () => {
  await App.start();
  console.log("Zeus has waked up. Listening");
})();
