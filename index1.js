function showSYMBOL(SYMBOLId) {
  const galleries = document.querySelectorAll(".SYMBOL");
  galleries.forEach((SYMBOL) => {
    if (SYMBOL.id === SYMBOLId) {
      SYMBOL.style.display = "flex";
    } else {
      SYMBOL.style.display = "none";
    }
  });
  resetCopyStatus();
}

function resetCopyStatus() {
  const copyStatus = document.getElementById("copy-status");
  copyStatus.style.display = "none";
}

function copyToInput(symbol) {
  const input = document.getElementById("symbol-input");
  input.value += symbol;
  showCopyStatus();
}

function copyDirectlyToClipboard(symbol) {
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  textarea.value = symbol;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function copyToClipboard() {
  const input = document.getElementById("symbol-input");
  input.select();
  document.execCommand("copy");
  alert("Symbols copied to clipboard!");
}

function removeInput() {
  const input = document.getElementById("symbol-input");
  input.value = "";
  resetCopyStatus();
}

function showCopyStatus() {
  const copyStatus = document.getElementById("copy-status");
  copyStatus.style.display = "inline-block";
  setTimeout(() => {
    copyStatus.style.display = "none";
  }, 600);
}
