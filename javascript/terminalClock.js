// terminalClock.js

function formatTimeUnit(unit) {
  return unit < 10 ? "0" + unit : unit;
}

function getCurrentTime() {
  const now = new Date();
  const hours = formatTimeUnit(now.getHours());
  const minutes = formatTimeUnit(now.getMinutes());
  const seconds = formatTimeUnit(now.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

function displayTime() {
  console.clear();
  console.log(getCurrentTime());
}

setInterval(displayTime, 1000);

// displayTime();
