var flowersymbol = [
    {
      symbol: "🌸",
      name: "Cherry Blossom",
      unicodeVersion: "6.0",
      unicodeNumber: "1F338",
      cssCode: "\\1F338",
      htmlEntity: "&#x1F338;"
    },
    {
      symbol: "🌼",
      name: "Blossom",
      unicodeVersion: "6.0",
      unicodeNumber: "1F33C",
      cssCode: "\\1F33C",
      htmlEntity: "&#x1F33C;"
    },
  ];
  
  window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var symbol = urlParams.get('symbol');
    if (symbol) {
      showSymbolInfo(symbol);
    }
  }
  
  function showSymbolInfo(symbol) {
    var symbolInfo = flowersymbol.find(function(item) {
      return item.symbol === symbol;
    });

     if (symbolInfo) {
      var infoContainer = document.getElementById('symbol-info');
      infoContainer.innerHTML = `
        <h1>${symbolInfo.name}</h1>
        <p>${symbolInfo.symbol}</p>
        <p><strong>Unicode Version:</strong> ${symbolInfo.unicodeVersion}</p>
        <p><strong>Unicode Number:</strong> ${symbolInfo.unicodeNumber}</p>
        <p><strong>CSS Code:</strong> ${symbolInfo.cssCode}</p>
        <p><strong>HTML Entity:</strong> ${String(symbolInfo.htmlEntity)}</p>
      `;
    }
  }
  