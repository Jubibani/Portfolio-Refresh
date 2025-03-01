function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("bounce-in-top"); // Remove animation class
    }
    

    // Remove the active class from all tabs
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        tablinks[i].classList.remove("active-tab");
    }

    // Show the selected tab
    var currentTab = document.getElementById(tabName);
    currentTab.style.display = "block";
    currentTab.classList.add("bounce-in-top"); // Add bounce animation
    evt.currentTarget.classList.add("active");
    evt.currentTarget.classList.add("active-tab");

    // Reset and animate progress bars when switching to "Skills" tab
    if (tabName === "skills") {  
        resetProgressBars();  // Reset progress bars
        setTimeout(() => {
            animateProgressBars();
            toggleArrowVisibility(true);  // Animate after reset
        }, 200); // Small delay for smooth effect


    } else {
        toggleArrowVisibility(false); // Hide arrow for other tabs
    }
}

//  Function to animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(progress => {
        let finalWidth = progress.getAttribute("data-width"); // Get target width
        progress.style.transition = "width 3.5s ease-in-out"; // Smooth animation

        // Apply final width
        setTimeout(() => {
            progress.style.width = finalWidth;
        }, 200); 
    });
}

//  Function to reset progress bars before animation
function resetProgressBars() {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(progress => {
        progress.style.transition = "none"; // Disable transition for instant reset
        progress.style.width = "0"; // Reset width
    });
}

// Call animation on page load (if skills tab is active)
document.addEventListener("DOMContentLoaded", () => {
    const arrow = document.querySelector('.arrow');

    // Show the arrow after a delay when the skills tab is active
    if (document.getElementById("skills").style.display === "block") {
        setTimeout(() => {
            toggleArrowVisibility(true); // Show arrow after delay
            arrow.classList.add('arrow'); // Add the animation class
        }, 2800); // Delay in milliseconds (e.g., 2500ms = 2.5 seconds)

        // Animate progress bars
        animateProgressBars();
    }

    arrow.addEventListener('click', () => {
        window.location.href = 'devstats.html'; // Redirect to devstats.html
    });

    // Optional: Add keyboard accessibility
    arrow.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            arrow.click(); // Trigger click event on Enter or Space
        }
    });
});

function toggleArrowVisibility(isVisible) {
    const arrow = document.querySelector('.arrow'); // Ensure you select the arrow element
    if (isVisible) {
        setTimeout(() => {
            arrow.style.display = 'block'; // Show arrow after delay
        }, 1500); // Delay in milliseconds (e.g., 1500ms = 1.5 seconds)
    } else {
        arrow.style.display = 'none'; // Hide arrow immediately
    }
}
