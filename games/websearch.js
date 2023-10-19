// Function to embed a website in an iframe
function embedWebsite() {
    // Define the URL of the website you want to embed
    const websiteURL = 'https://eic.goldenn.dev/1.html';

    // Create an iframe element
    const iframe = document.createElement('iframe');

    // Set the source of the iframe to the specified website
    iframe.src = websiteURL;

    // Set the width and height of the iframe (adjust as needed)
    iframe.width = '100%';
    iframe.height = '500px';

    // Add a border to the iframe (optional)
    iframe.style.border = '1px solid #ccc';

    // Append the iframe to a specific div or the body of the page
    document.body.appendChild(iframe);
}

// Call the embedWebsite function to embed the website when needed
embedWebsite();
