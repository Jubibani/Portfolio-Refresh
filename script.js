document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to my portfolio!");
    // You can add more interactive functionalities here

    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    // Check if menuIcon and navbar exist before adding event listeners
    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('hidden'); // Toggle the hidden class
        });
    }

    // Add animation class to main element
    const mainElement = document.querySelector('main');
    mainElement.classList.add('slide-in-blurred-top');

    // Function to type text with a delay
    function typeWriter(text, element, delay, callback) {
        let i = 0;
        element.textContent = ""; // Clear the element before typing
        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, delay);
            } else if (callback) {
                callback(); // Call the callback function if provided
            }
        }
        typing();
    }

    // Show the greeting text by removing the hidden class
    const greetingElement = document.getElementById('greeting');
    if (!greetingElement) {
        console.error("Greeting element not found!");
        return; // Exit if the element is not found
    }

    const nameElement = document.getElementById('name');
    const callElement = document.getElementById('call');
    const nicknameElement = document.getElementById('nickname');
    const descriptionElement = document.getElementById('description');
    const exploreButton = document.getElementById('exploreButton');

    // Remove hidden class to show the greeting
    greetingElement.parentElement.classList.remove('hidden');

    // Clear the text content of each span before starting the typewriter effect
    greetingElement.textContent = "";
    nameElement.textContent = "";
    callElement.textContent = "";
    nicknameElement.textContent = "";
    descriptionElement.textContent = ""; // Clear description text

    // Start typing effect for each part of the greeting
    typeWriter("Hi, I'm ", greetingElement, 100, () => {
        typeWriter("Jiovanni", nameElement, 100, () => {
            typeWriter(" but you can call me ", callElement, 100, () => {
                typeWriter("Jubibani", nicknameElement, 100, () => {
                    // Apply slide-in animation to the description after the name animation
                    descriptionElement.classList.add('slide-in-blurred-top');
                    descriptionElement.textContent = "I'm a versatile developer specializing in web, app, and game development, with a passion for creating impactful designs.";
                });
            });
        });
    });
    // Show the Explore button after both animations are done
    exploreButton.style.display = 'none'; // Hide the button
    // exploreButton.classList.add('fade-in'); // Add fade-in animation class
    setTimeout(() => {
        exploreButton.style.display = 'inline-block';
        exploreButton.classList.add('fade-in'); // Add fade-in animation class
    }, 5500);
}); 