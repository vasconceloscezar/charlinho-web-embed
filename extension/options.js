```javascript
let optionsPage = {};

// Function to handle incoming messages
optionsPage.handleMessage = function(request, sender, sendResponse) {
    if (request.message === 'optionsMessage') {
        optionsPage.updateSettings(request.data);
    }
}

// Function to update the settings of the extension
optionsPage.updateSettings = function(data) {
    let extensionSettings = data;
    document.getElementById('optionsContainer').innerText = JSON.stringify(extensionSettings, null, 2);
}

// Function to render the options
optionsPage.renderOptions = function() {
    chrome.runtime.sendMessage({message: 'getSettings'}, function(response) {
        optionsPage.updateSettings(response.data);
    });
}

// Initialize the extension
optionsPage.initExtension = function() {
    chrome.runtime.onMessage.addListener(optionsPage.handleMessage);
    optionsPage.renderOptions();
}

document.addEventListener('DOMContentLoaded', optionsPage.initExtension);
```