import * as Troll from "../troll-repository/troll.js";

self.onmessage = event => {
  const result = Troll.run(event.data.source);
  self.postMessage(result);
};
