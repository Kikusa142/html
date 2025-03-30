let currentIndex = 0;

function moveSlide(direction) {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-track img');
  const slideWidth = slides[0].clientWidth + 20; // 20px gap mezi obrázky
  const visibleSlides = 3;
  const maxIndex = slides.length - visibleSlides;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
