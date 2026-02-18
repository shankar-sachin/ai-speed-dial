async function run() {
  console.log("App starting...");
  await init();
  start()
}

async function init() {
  console.log("Initializing...");
}

function start() {
  console.log("Program running.");
}

run();
