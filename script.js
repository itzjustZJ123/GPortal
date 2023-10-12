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
