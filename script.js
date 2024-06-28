document.addEventListener("DOMContentLoaded", function() {
  const adUrls = [
    "https://www.highrevenuenetwork.com/wf2ryecw?key=828386790ff0db853067c3f48fb50486",
    "https://www.highrevenuenetwork.com/xiu12xnvrj?key=2e31ef89c102bf4965f9eef261eca304",
    "https://www.highrevenuenetwork.com/tccmp1rezd?key=aba8f3ebfdac72701a803bf401855c5d",
    "https://www.highrevenuenetwork.com/k42qjgqx3n?key=bde59e0741a7cffd00dcf4512509e928"
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
  const sportyBetCodes = ["60B40811", "A7FEB1B", "17AC454"];
  const betwayCodes = ["Loading", ];
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
