```javascript
let backgroundPage = chrome.extension.getBackgroundPage();

document.addEventListener('DOMContentLoaded', function() {
    initPopup();
});

function initPopup() {
    let popupContainer = document.getElementById('popupContainer');
    renderPopup(popupContainer);
}

function renderPopup(container) {
    // Render the popup here
    // This is just a placeholder. Replace this with actual rendering code.
    container.innerHTML = '<h1>Website Comment Extension</h1>';
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'popupMessage') {
        handleMessage(request.data);
    }
});

function handleMessage(data) {
    // Handle the incoming message here
    // This is just a placeholder. Replace this with actual message handling code.
    console.log(data);
}
```