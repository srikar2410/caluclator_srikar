let currentDisplay = "0";
let resultDisplay = "false";

function appendToDisplay(value) {
  if (currentDisplay === "0" || resultDisplay) {
    currentDisplay = value;
  } else {
    currentDisplay = currentDisplay + value;
  }
  resultDisplay = false;
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.getElementById("display");
  displayElement.textContent = currentDisplay;
}

function calculateResult() {
  try {
    const result = eval(currentDisplay);
    currentDisplay += "\n" + result.toString();
    updateDisplay();
  } catch (error) {
    currentDisplay = "/n + Error";
    updateDisplay();
  }
  resultDisplay = true;
}

function clearLastElement() {
  currentDisplay = currentDisplay.slice(0, -1);

  if (currentDisplay === "") {
    currentDisplay = "0";
  }
  updateDisplay();
}

function clearDisplay() {
  currentDisplay = "0";
  resultDisplay = false;
  updateDisplay();
}