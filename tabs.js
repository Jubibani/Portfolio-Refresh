function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.maxHeight = null; // Reset max-height
        tabcontent[i].style.display = "none"; // Hide the content
    }

    // Remove the active class from all tabs
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an "active" class to the button that opened the tab
    var currentTab = document.getElementById(tabName);
    currentTab.style.display = "block"; // Show the content
    currentTab.style.maxHeight = currentTab.scrollHeight + "px"; // Set max-height to the scroll height
    evt.currentTarget.className += " active"; // Add active class to the clicked tab
} 
