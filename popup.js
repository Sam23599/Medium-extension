document.addEventListener('DOMContentLoaded', function () {
    var hideButton = document.getElementById('hideButton');
    hideButton.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'hideElement' });
        });
    });
});
