document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to my portfolio!");
    // You can add more interactive functionalities here

    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('hidden'); // Toggle the hidden class
    });
}); 