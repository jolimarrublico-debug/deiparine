let slideIndex = 1;
let autoPlayInterval;

// Initialize the slideshow
document.addEventListener('DOMContentLoaded', function() {
    showSlide(slideIndex);
    startAutoPlay();
});

// Next/previous controls
function changeSlide(n) {
    showSlide(slideIndex += n);
    resetAutoPlay();
}

// Thumbnail image controls
function currentSlide(n) {
    showSlide(slideIndex = n);
    resetAutoPlay();
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}

// Auto-play functionality
function startAutoPlay() {
    autoPlayInterval = setInterval(function() {
        slideIndex++;
        showSlide(slideIndex);
    }, 3000); // Change slide every 3 seconds
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (event.key === 'ArrowRight') {
        changeSlide(1);
    }
});
