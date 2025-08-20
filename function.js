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

  function addToHistory(expression, result) {
  const historyList = document.getElementById("history-list");
  const entry = document.createElement("li");
  entry.className = "history-entry";
  entry.textContent = `${expression} = ${result}`;
  historyList.prepend(entry);
}

function resetHistory() {
  if (confirm("Yakin ingin menghapus riwayat?")) {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = '';
    display.innerText = '0';
  }
}
