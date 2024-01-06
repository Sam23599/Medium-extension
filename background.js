chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // Check if the URL is not a chrome:// URL
    if (tab.url && !tab.url.startsWith('chrome://') && changeInfo.status === 'complete') {
        // Execute your content script or inject your code here
        chrome.tabs.executeScript(tabId, { file: 'content.js' });
    }
});
