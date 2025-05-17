const display = document.getElementById("display");
const history = document.getElementById("history");

function appendValue(value) {
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
  history.innerText = "";
}

function backspace() {
  let current = display.innerText;
  if (current.length > 1) {
    display.innerText = current.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    const expression = display.innerText;
    const result = eval(expression);
    history.innerText = expression + " =";
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || key === ".") {
    appendValue(key);
  } else if (["+", "-", "*", "/", "%"].includes(key)) {
    appendValue(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});



