// Function to animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(progress => {
        const finalWidth = progress.getAttribute("data-width"); // Get target width
        progress.style.transition = "none"; // Disable transition for instant reset
        progress.style.width = "0"; // Reset width to 0

        // Apply final width after a short delay for animation
        setTimeout(() => {
            progress.style.transition = "width 3.5s ease-in-out"; // Smooth animation
            progress.style.width = finalWidth; // Set the width to the final value
        }, 200); // Delay to allow for any other animations to complete
    });
}

// Initialize Flickity
document.addEventListener('DOMContentLoaded', () => {
    const flkty = new Flickity('.gallery', {
        wrapAround: true,
        autoPlay: true, // Optional: Automatically play the carousel
        pageDots: false // Optional: Hide page dots
    });

    // Animate progress bars on page load
    animateProgressBars();

    // Add entrance animation to stats-container
    const statsContainer = document.querySelector('.stats-container');
    statsContainer.classList.add('scale-in-hor-left');

    //entrance animation bag
    const bagButton = document.querySelector('.bag-button');

    // Listen for the animation end event
    bagButton.addEventListener('animationend', () => {
        bagButton.classList.remove('swirl-in-fwd');
    });
    
    // Update heading based on active slide
    flkty.on('change', (index) => {
        console.log('Current slide index:', index); // Debugging line
        const heading = document.getElementById('stats-heading');
        
        // Remove the animation class if it exists
        heading.classList.remove('tracking-in-expand');

        // Update the heading text based on the active slide
        if (index === 0) {
            heading.textContent = 'Languages'; // First slide
        } else if (index === 1) {
            heading.textContent = 'Tools'; // Second slide
        } else {
            heading.textContent = 'Attributes'; // Change this as needed for additional slides
        }

        // Re-add the animation class to trigger the animation
        setTimeout(() => {
            heading.classList.add('tracking-in-expand');
        }, 10); // Small timeout to ensure the class is applied after the text change

        // Animate progress bars each time the slide changes
        animateProgressBars();
    });
});

