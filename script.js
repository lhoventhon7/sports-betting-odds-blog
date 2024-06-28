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
});

const sportybetCodes = [
  { code: "60B40811" },
  { code: "A7FEB1B" },
];

const betwayCodes = [
  { code: "BW12345" },
  { code: "BW67890" },
];

const bcGamesCodes = [
  { code: "BC12345" },
  { code: "BC67890" },
];

const stakeCodes = [
  { code: "ST12345" },
  { code: "ST67890" },
];

function displayCodes() {
  const sportybetCodesList = document.getElementById('sportybet-codes');
  const betwayCodesList = document.getElementById('betway-codes');
  const bcGamesCodesList = document.getElementById('bcgames-codes');
  const stakeCodesList = document.getElementById('stake-codes');

  sportybetCodesList.innerHTML = sportybetCodes.map(code => `
    <div>Code: <strong>${code.code}</strong></div>
  `).join('');

  betwayCodesList.innerHTML = betwayCodes.map(code => `
    <div>Code: <strong>${code.code}</strong></div>
  `).join('');

  bcGamesCodesList.innerHTML = bcGamesCodes.map(code => `
    <div>Code: <strong>${code.code}</strong></div>
  `).join('');

  stakeCodesList.innerHTML = stakeCodes.map(code => `
    <div>Code: <strong>${code.code}</strong></div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', displayCodes);
