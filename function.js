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

// Fungsi untuk menghapus karakter terakhir
function appendValue(val) {
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = val;
    } else {
        display.innerText += val;
    }
}

  // Fungsi untuk menambahkan operator
  function deleteLast() {
    if (display.innerText.length > 1) {
      display.innerText = display.innerText.slice(0, -1);
    } else {
      display.innerText = '0';
    }
  }
  

  // Fungsi untuk mengubah tema
  const toggleBtn = document.getElementById("themeToggleBtn");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    toggleBtn.classList.toggle("theme-toggle--toggled");

    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("preferred-theme", isDark ? "dark" : "light");
  });

  // Saat halaman dimuat, cek preferensi sebelumnya
  window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("preferred-theme");
    if (saved === "dark") {
      document.body.classList.add("dark-theme");
      toggleBtn.classList.add("theme-toggle--toggled");
    }
  });

  // Fungsi untuk menambahkan data ke riwayat
function addToHistory(expression, result) {
  const historyList = document.getElementById("history-list");
  const entry = document.createElement("li");
  entry.className = "history-entry";
  entry.textContent = `${expression} = ${result}`;
  historyList.prepend(entry);
}

// Fungsi untuk menghapus riwayat
function resetHistory() {
  if (confirm("Yakin ingin menghapus riwayat?")) {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = '';
    display.innerText = '0';
  }
}

// Fungsi untuk menyesuaikan ukuran font pada display
function resizeDisplayText() {
  const maxFontSize = 32;
  const minFontSize = 12;
  const display = document.getElementById("display");

  let fontSize = maxFontSize;
  display.style.fontSize = fontSize + "px";

  while (display.scrollWidth > display.clientWidth && fontSize > minFontSize) {
    fontSize -= 1;
    display.style.fontSize = fontSize + "px";
  }
}
// END Fungsi untuk menyesuaikan ukuran font pada display

// Fungsi ilmiah
function squareRoot() {
  try {
    const value = parseFloat(display.innerText);
    const result = Math.sqrt(value);
    display.innerText = result;
    addToHistory(`√(${value})`, result);
  } catch {
    display.innerText = "Error";
  }
}

function square() {
  try {
    const value = parseFloat(display.innerText);
    const result = Math.pow(value, 2);
    display.innerText = result;
    addToHistory(`${value}²`, result);
  } catch {
    display.innerText = "Error";
  }
}

function cube() {
  try {
    const value = parseFloat(display.innerText);
    const result = Math.pow(value, 3);
    display.innerText = result;
    addToHistory(`${value}³`, result);
  } catch {
    display.innerText = "Error";
  }
}

function power() {
  display.innerText += "**";
}
// END Fungsi ilmiah

// Toggle panel fungsi ilmiahh
const toggleBtnAdvanced = document.getElementById("toggleAdvanced");
const advancedPanel = document.getElementById("advancedFunctions");

toggleBtnAdvanced.addEventListener("click", () => {
  advancedPanel.classList.toggle("hidden");

  const isOpen = !advancedPanel.classList.contains("hidden");
  toggleBtnAdvanced.innerText = isOpen ? "Hide ▲" : "Expand ▼";
});
// END Toggle panel fungsi ilmiah

