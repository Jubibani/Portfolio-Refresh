let currentSlideIndex = 1;
showSlide(currentSlideIndex);

function moveCarousel(n) {
    showSlide(currentSlideIndex += n);
}

function currentSlide(n) {
    showSlide(currentSlideIndex = n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("carousel-slide");
    const dots = document.getElementsByClassName("carousel-dot");
    
    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // Remove active state from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Show current slide and activate corresponding dot
    slides[currentSlideIndex - 1].classList.add("active");
    dots[currentSlideIndex - 1].classList.add("active");
    
    // Add bounce-in animation to visible cards
    const visibleCards = slides[currentSlideIndex - 1].getElementsByClassName("interest-card");
    for (let card of visibleCards) {
        card.style.animation = 'none';
        card.offsetHeight; // Trigger reflow
        card.style.animation = null;
        card.classList.remove("bounce-in");
        void card.offsetWidth; // Trigger reflow
        card.classList.add("bounce-in");
    }
} 