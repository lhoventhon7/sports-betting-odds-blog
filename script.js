document.addEventListener("DOMContentLoaded", function() {
  const adUrls = [
    "https://coofoagleeh.com/4/7303793",
    "https://isoukrunge.net/4/7303820",
    "https://oudsutch.com/4/7303676",
    "https://ejitsirdosha.net/4/7304566"
  ];
  
  function reloadAd(iframeId, adUrl) {
    document.getElementById(iframeId).src = adUrl;
    setTimeout(() => reloadAd(iframeId, adUrl), 30000); // reload every 30 seconds
  }

  reloadAd("ad-iframe-1", adUrls[0]);
  reloadAd("ad-iframe-2", adUrls[1]);
  reloadAd("ad-iframe-3", adUrls[2]);
  reloadAd("ad-iframe-4", adUrls[3]);

  // Function to copy code to clipboard
  function copyCode(code) {
    const tempInput = document.createElement("input");
    tempInput.value = code;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Code copied to clipboard: " + code);
  }

  // Example codes
  const sportyBetCodes = ["C7578D5","BFF9147","D47106"  ];
  const betwayCodes = ["U1A6C3E6B", "U1A6C3A32 "  ];
  const bcGamesCodes = ["Loading", ];
  const stakeCodes = ["Loading", ];

  // Function to render codes with share buttons
  function renderCodes(codes, elementId) {
    const container = document.getElementById(elementId);
    codes.forEach(code => {
      const codeElement = document.createElement("div");
      codeElement.className = "d-flex justify-content-between align-items-center mb-2";
      codeElement.innerHTML = `
        <span>${code}</span>
        <button class="btn btn-outline-primary btn-sm" onclick="copyCode('${code}')">
          <i class="fas fa-share-alt"></i> Share
        </button>
      `;
      container.appendChild(codeElement);
    });
  }

  // Render example codes
  renderCodes(sportyBetCodes, "sportybet-codes");
  renderCodes(betwayCodes, "betway-codes");
  renderCodes(bcGamesCodes, "bcgames-codes");
  renderCodes(stakeCodes, "stake-codes");
});

// Expose copyCode function to global scope
function copyCode(code) {
  const tempInput = document.createElement("input");
  tempInput.value = code;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Code copied to clipboard: " + code);
}
