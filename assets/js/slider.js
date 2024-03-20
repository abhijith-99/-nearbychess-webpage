var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


let startPos = 0;
let endPos = 0;

function initSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return;

    slider.addEventListener('touchstart', (e) => {
        startPos = e.touches[0].clientX;
    }, false);

    slider.addEventListener('touchend', (e) => {
        endPos = e.changedTouches[0].clientX;
        if (startPos > endPos + 50) {
            // Swiped left
            moveSlide(1);
        } else if (startPos + 50 < endPos) {
            // Swiped right
            moveSlide(-1);
        }
    }, false);

    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        startPos = e.clientX;
        slider.addEventListener('mouseup', mouseUpHandler, false);
    }, false);

    function mouseUpHandler(e) {
        endPos = e.clientX;
        slider.removeEventListener('mouseup', mouseUpHandler, false);
        if (startPos > endPos + 50) {
            // Dragged left
            moveSlide(1);
        } else if (startPos + 50 < endPos) {
            // Dragged right
            moveSlide(-1);
        }
    }
}

// Initialize the slider functionality
document.addEventListener('DOMContentLoaded', initSlider);
