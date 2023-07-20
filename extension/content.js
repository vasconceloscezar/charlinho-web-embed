```javascript
let floatingButton = null;

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'contentMessage') {
        handleMessage(request.data);
    }
});

// Function to handle incoming messages
function handleMessage(data) {
    if (data.action === 'createButton') {
        createFloatingButton();
    } else if (data.action === 'removeButton') {
        removeFloatingButton();
    }
}

// Function to create the floating button
function createFloatingButton() {
    if (!floatingButton) {
        floatingButton = document.createElement('button');
        floatingButton.id = 'floatingButton';
        floatingButton.style.position = 'fixed';
        floatingButton.style.bottom = '20px';
        floatingButton.style.right = '20px';
        floatingButton.style.zIndex = '1000';
        floatingButton.innerText = 'Comment';
        document.body.appendChild(floatingButton);

        floatingButton.addEventListener('click', () => {
            chrome.runtime.sendMessage({message: 'popupMessage', data: {action: 'open'}});
        });
    }
}

// Function to remove the floating button
function removeFloatingButton() {
    if (floatingButton) {
        floatingButton.remove();
        floatingButton = null;
    }
}

// Initialize the content script
function initExtension() {
    chrome.runtime.sendMessage({message: 'backgroundPage', data: {action: 'init'}});
}

initExtension();
```