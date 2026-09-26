const slides=document.querySelectorAll('.hero-slide');
let currentSlide=0;

function showSlide(){
    slides[currentSlide].classList.remove('active');
    currentSlide=(currentSlide+1)%slides.length;
    slides[currentSlide].classList.add('active');
}