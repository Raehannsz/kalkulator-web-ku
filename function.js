  let display = document.getElementById('display');
  let calculator = document.getElementById('calculator');
  let isDark = false;

  function appendValue(val) {
    if (display.innerText === '0') {
      display.innerText = val;
    } else {
      display.innerText += val;
    }
  }

  function clearDisplay() {
    display.innerText = '0';
  }

function calculate() {
    try {
        const expression = display.innerText;
        const result = eval(expression);
        display.innerText = result;
        addToHistory(expression, result);
    } catch (e) {
        display.innerText = 'Error';
    }
}

// display berisi 'Error', langsung ganti dengan angka baru
function appendValue(val) {
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = val;
    } else {
        display.innerText += val;
    }
}

  function deleteLast() {
    if (display.innerText.length > 1) {
      display.innerText = display.innerText.slice(0, -1);
    } else {
      display.innerText = '0';
    }
  }

  function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    isDark = !isDark;
  }

  function addToHistory(expression, result) {
  const historyList = document.getElementById("history-list");
  const entry = document.createElement("li");
  entry.className = "history-entry";
  entry.textContent = `${expression} = ${result}`;
  historyList.prepend(entry);
}

function calculate() {
  try {
    const expression = display.innerText;
    const result = eval(expression);
    display.innerText = result;
    addToHistory(expression, result);
  } catch (e) {
    display.innerText = 'Error';
  }
}

function resetHistory() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = '';
    display.innerText = '0';
  }


