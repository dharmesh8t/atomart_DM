// Toggle Side Navbar
const sidenav = document.querySelector(".side-navbar");

function showNavbar() {
  sidenav.classList.add("active");
}

function cn() {
  sidenav.classList.remove("active");
}

// Carousel Functionality
let slideIndex = 0;
const slides = document.querySelector(".carousel-slide");

function moveCarousel() {
  slideIndex++;
  if (slideIndex >= slides.children.length) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(moveCarousel, 3000); // Change slide every 3s
