window.onload = function() {
    // Open a new blank window
    var win = window.open();
    win.document.write(`
        <style>
            body, html {
                padding: 0;
                margin: 0;
                overflow: hidden; // Prevents scrolling
                width: 100%;
                height: 100%;
            }
            iframe {
                border: none;
                width: 100%;
                height: 100%;
                display: block; // Removes any default spacing
            }
        </style>
        <iframe src="https://handmadecurlyorganization.its-just-zjjust.repl.co"></iframe>
    `);

    // Redirect the current page to Google Classroom
    window.location.replace("https://classroom.google.com/");
};


// Function to filter games based on search term
function filterGames() {
    const input = document.getElementById('searchInput');
    const searchTerm = input.value.toLowerCase();
    const games = document.querySelectorAll('.game-link');

    games.forEach(game => {
        const title = game.getAttribute('data-title').toLowerCase();
        if (title.includes(searchTerm)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
}
