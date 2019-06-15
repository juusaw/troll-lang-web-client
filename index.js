const worker = new Worker("webworker.js");

document.getElementById("run").addEventListener("click", () => {
  const source = document.getElementById("source").value;
  worker.postMessage({ source: source });
});

worker.onmessage = event => {
  document.getElementById("result").innerText = event.data.c;
};
