document.addEventListener("DOMContentLoaded", function () {
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

  // Function to handle copying and showing the betting code
  function copyCodeWithAd(code, adUrl) {
    // Open the Monetag link in a new tab
    window.open(adUrl, "_blank");

    // Simulate a delay of 3 seconds before copying the code
    setTimeout(() => {
      const tempInput = document.createElement("input");
      tempInput.value = code;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert("Betting code copied to clipboard: " + code);
    }, 3000); // 3 seconds delay
  }

  // Example codes
  const sportyBetCodes = [
    { code: "C7578D5", adUrl: adUrls[0] },
    { code: "BFF9147", adUrl: adUrls[0] },
    { code: "D47106", adUrl: adUrls[0] }
  ];

  const betwayCodes = [
    { code: "U1A6C3E6B", adUrl: adUrls[1] },
    { code: "U1A6C3A32", adUrl: adUrls[1] }
  ];

  const bcGamesCodes = [{ code: "Loading", adUrl: adUrls[2] }];
  const stakeCodes = [{ code: "Loading", adUrl: adUrls[3] }];

  // Function to render codes with share buttons
  function renderCodes(codes, elementId) {
    const container = document.getElementById(elementId);
    codes.forEach(({ code, adUrl }) => {
      const codeElement = document.createElement("div");
      codeElement.className = "d-flex justify-content-between align-items-center mb-2";
      codeElement.innerHTML = `
        <span>${code}</span>
        <button class="btn btn-outline-primary btn-sm" onclick="copyCodeWithAd('${code}', '${adUrl}')">
          <i class="fas fa-share-alt"></i> Copy Betting Code
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

// Expose copyCodeWithAd function to global scope
function copyCodeWithAd(code, adUrl) {
  // Open the Monetag link in a new tab
  window.open(adUrl, "_blank");

  // Simulate a delay of 3 seconds before copying the code
  setTimeout(() => {
    const tempInput = document.createElement("input");
    tempInput.value = code;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Betting code copied to clipboard: " + code);
  }, 3000); // 3 seconds delay
}
