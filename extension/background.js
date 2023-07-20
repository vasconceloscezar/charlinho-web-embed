```javascript
let extensionSettings = {};

chrome.runtime.onInstalled.addListener(function() {
    initExtension();
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    handleMessage(request, sender, sendResponse);
});

function initExtension() {
    extensionSettings = {
        floatingButton: true,
    };
    chrome.storage.sync.set({extensionSettings});
}

function handleMessage(request, sender, sendResponse) {
    if (request.popupMessage) {
        handlePopupMessage(request, sender, sendResponse);
    } else if (request.contentMessage) {
        handleContentMessage(request, sender, sendResponse);
    } else if (request.optionsMessage) {
        handleOptionsMessage(request, sender, sendResponse);
    }
}

function handlePopupMessage(request, sender, sendResponse) {
    // Handle popup message
}

function handleContentMessage(request, sender, sendResponse) {
    // Handle content message
}

function handleOptionsMessage(request, sender, sendResponse) {
    // Handle options message
}

function updateSettings(newSettings) {
    extensionSettings = newSettings;
    chrome.storage.sync.set({extensionSettings});
}
```