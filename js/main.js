const heroSlides = document.querySelectorAll(".hero-bg-slide");
const heroDots = document.querySelectorAll(".hero-dots button");
const heroPrev = document.querySelector(".hero-prev");
const heroNext = document.querySelector(".hero-next");

let heroIndex = 0;

function showHeroSlide(index) {
  if (!heroSlides.length) return;

  heroSlides.forEach((slide) => slide.classList.remove("active"));
  heroDots.forEach((dot) => dot.classList.remove("active"));

  heroSlides[index].classList.add("active");
  heroDots[index]?.classList.add("active");
}

function nextHeroSlide() {
  heroIndex = (heroIndex + 1) % heroSlides.length;
  showHeroSlide(heroIndex);
}

function prevHeroSlide() {
  heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
  showHeroSlide(heroIndex);
}

heroNext?.addEventListener("click", nextHeroSlide);
heroPrev?.addEventListener("click", prevHeroSlide);

heroDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    heroIndex = index;
    showHeroSlide(heroIndex);
  });
});

if (heroSlides.length) {
  setInterval(nextHeroSlide, 5000);
}