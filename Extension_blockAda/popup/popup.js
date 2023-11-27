import {
  getRulesEnabledState,
  enableRulesForCurrentPage,
  disableRulesForCurrentPage,
} from '../scripts/background.js';

const wrapperPopup = document.querySelector('.wrapper');
const button = document.getElementById('btn-on');
const text = document.querySelector('.text-content');
const power = document.querySelector('#power');
const domain = document.querySelector('.domain');
const infoIcon = document.querySelector('#infoIcon');

async function updateButtonState() {
  fetchDomain();
  const isEnabled = await getRulesEnabledState();
  if (!isEnabled) {
    text.innerHTML = 'Ad blocking disabled.';
    wrapperPopup.classList.add('disabled');
    power.src = '../assets/icons/power-off (1).png';
    infoIcon.src = '../assets/icons/letter-i (1).png';
    chrome.action.setIcon({
      path: {
        16: '../assets/images/logo-off_16.png',
        48: '../assets/images/logo-off_32.png',
        128: '../assets/images/logo-off_64.png',
      },
    });
  } else {
    text.innerHTML = 'Advertising on this site has been successfully blocked.';
    wrapperPopup.classList.remove('disabled');
    power.src = '../assets/icons/power-off.png';
    infoIcon.src = '../assets/icons/letter-i.png';
    chrome.action.setIcon({
      path: {
        16: '../assets/images/logo_16.png',
        48: '../assets/images/logo_32.png',
        128: '../assets/images/logo_64.png',
      },
    });
  }
}

button.addEventListener('click', async () => {
  const isEnabled = await getRulesEnabledState();
  if (isEnabled) {
    await disableRulesForCurrentPage();
  } else {
    await enableRulesForCurrentPage();
  }

  updateButtonState();
});

async function fetchDomain() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab?.url) {
    try {
      let url = new URL(tab.url);
      domain.innerHTML = url.hostname;
    } catch {}
  }
}

updateButtonState();
