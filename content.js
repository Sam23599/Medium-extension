// Function to hide the element
function hideElement() {
    // Find the article element
    var articleElement = document.querySelector('article');

    // Check if the article element is found
    if (articleElement) {
        // Find the next sibling element with class 'ab ca'
        var siblingElement = articleElement.nextElementSibling;

        // Check if the sibling element is found
        if (siblingElement && siblingElement.classList.contains('ab') && siblingElement.classList.contains('ca')) {
            // Set the display property of the sibling to 'none'
            siblingElement.style.display = 'none';
        } else {
            console.error('Sibling element with class \'ab ca\' not found');
        }
    } else {
        console.error('Article element not found');
    }
}

// Execute hideElement() when the page is loaded
hideElement();






// Same function, but if you like it to be a popup button instead to execute it

/*
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'hideElement') {
        hideElement();
    }
});
*/