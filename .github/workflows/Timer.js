// Stopwatch state
let timer; // setInterval reference
let milliseconds = 0; // elapsed time
let isRunning = false; // running flag

// application elements declaration as variables
const display = document.getElementById("display");
const startBtn = document.getElementById("clockstart");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

/**
 * Convert ms → formatted string HH:MM:SS.ms
 */
function ClockTimer(ms) {
  let SumSeconds = Math.floor(ms / 1000);
  let hrs = Math.floor(SumSeconds / 3600);
  let mins = Math.floor((SumSeconds % 3600) / 60);
  let secs = SumSeconds % 60;
  let millisecs = Math.floor((ms % 1000) / 10);

  return (
    String(hrs).padStart(2, "0") + ":" +
    String(mins).padStart(2, "0") + ":" +
    String(secs).padStart(2, "0") + "." +
    String(millisecs).padStart(2, "0")
  );
}

/**
 * Update display
 */
function updateDisplay() {
  display.textContent = ClockTimer(milliseconds);
}


startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      milliseconds += 10;
      updateDisplay();
    }, 10);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});


/**
 * Reset button handler
 */
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  milliseconds = 0;
  updateDisplay();
  ssSwitch.textContent = "Start";
  ssSwitch.classList.remove("stop");
  ssSwitch.classList.add("start");
});

// Initialize
ssSwitch.classList.add("start");
updateDisplay();
