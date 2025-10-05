// Content script for Comet GameHouse
console.log('Comet GameHouse content script loaded');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getPageInfo') {
    sendResponse({
      title: document.title,
      url: window.location.href
    });
  }
});