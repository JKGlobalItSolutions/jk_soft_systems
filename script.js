
    document.addEventListener("DOMContentLoaded", function() {
    fetch('content.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('included-content').innerHTML = data;
        })
        .catch(error => console.error('Error fetching content:', error));
});

    document.addEventListener("DOMContentLoaded", function() {
    fetch('includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('included-header').innerHTML = data;
        })
        .catch(error => console.error('Error fetching content:', error));
});


