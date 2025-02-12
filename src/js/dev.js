// Initialize Flickity
document.addEventListener('DOMContentLoaded', () => {
    const flkty = new Flickity('.gallery', {
        wrapAround: true,
        autoPlay: true, // Optional: Automatically play the carousel
        pageDots: false // Optional: Hide page dots
    });

    // Update heading based on active slide
    flkty.on('change', (index) => {
        console.log('Current slide index:', index); // Debugging line
        const heading = document.getElementById('stats-heading');
        if (index === 0) {
            heading.textContent = 'Hard Skills'; // First slide
        } else if (index === 1) {
            heading.textContent = 'Soft Skills'; // Second slide
        } else {
            heading.textContent = 'Other Skills'; // Change this as needed for additional slides
        }
    });
});

