function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.maxHeight = null;
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all tabs
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab
    var currentTab = document.getElementById(tabName);
    currentTab.style.display = "block";
    currentTab.style.maxHeight = currentTab.scrollHeight + "px";
    evt.currentTarget.classList.add("active");

    // Reset and animate progress bars when switching to "Skills" tab
    if (tabName === "skills") {  
        resetProgressBars();  // Reset progress bars
        setTimeout(() => {
            animateProgressBars();  // Animate after reset
        }, 200); // Small delay for smooth effect

        // Show arrow when skills tab is active
        const arrow = document.querySelector('.arrow'); // Ensure you select the arrow element
        arrow.style.display = 'block'; // Show arrow
    } else {
        const arrow = document.querySelector('.arrow'); // Ensure you select the arrow element
        arrow.style.display = 'none'; // Hide arrow for other tabs
    }
}

//  Function to animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(progress => {
        let finalWidth = progress.getAttribute("data-width"); // Get target width
        progress.style.transition = "width 1.5s ease-in-out"; // Smooth animation

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
    if (document.getElementById("skills").style.display === "block") {
        animateProgressBars();
    }
});
