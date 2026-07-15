const menuToggle = document.querySelector(".mobile-menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    });
  });
}

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

const videoCard = document.querySelector(".video-card");
const factoryVideo = videoCard?.querySelector("video");
const videoPlayButton = videoCard?.querySelector(".video-play");

if (videoCard && factoryVideo && videoPlayButton) {
  videoPlayButton.addEventListener("click", async () => {
    try {
      await factoryVideo.play();
    } catch (error) {
      factoryVideo.controls = true;
      console.error("Factory tour video could not start:", error);
    }
  });

  factoryVideo.addEventListener("play", () => {
    videoCard.classList.add("is-playing");
  });

  const restoreVideoCover = () => {
    videoCard.classList.remove("is-playing");
  };

  factoryVideo.addEventListener("pause", restoreVideoCover);
  factoryVideo.addEventListener("ended", restoreVideoCover);
}

document.querySelectorAll(".carousel").forEach((carousel) => {
  const slides = Array.from(
    carousel.querySelectorAll(".image-slide, .gallery-slide")
  );
  const previous = carousel.querySelector(".carousel-prev");
  const next = carousel.querySelector(".carousel-next");
  const dotsContainer = carousel.querySelector(".carousel-dots");

  if (slides.length < 2) return;

  let activeIndex = Math.max(
    0,
    slides.findIndex((slide) => slide.classList.contains("active"))
  );

  const dots = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", `Show image ${index + 1}`);
    dot.addEventListener("click", () => showSlide(index));
    dotsContainer?.appendChild(dot);
    return dot;
  });

  function showSlide(index, shouldScroll = true) {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === activeIndex);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === activeIndex);
    });
    if (shouldScroll) {
      slides[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  previous?.addEventListener("click", () => showSlide(activeIndex - 1));
  next?.addEventListener("click", () => showSlide(activeIndex + 1));
  showSlide(activeIndex, false);
});

const exhibitionModal = document.querySelector("#exhibition-modal");

if (exhibitionModal) {
  const modalTitle = exhibitionModal.querySelector("#modal-title");
  const modalDescription = exhibitionModal.querySelector("#modal-description");
  const modalImage = exhibitionModal.querySelector(".modal-gallery img");
  const closeButton = exhibitionModal.querySelector(".modal-close");
  const backdrop = exhibitionModal.querySelector(".modal-backdrop");

  const closeModal = () => {
    exhibitionModal.classList.remove("is-open");
    exhibitionModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-modal]").forEach((card) => {
    card.querySelector("button")?.addEventListener("click", () => {
      modalTitle.textContent =
        card.querySelector("h3")?.textContent || "ABERO event update";
      modalDescription.textContent =
        card.querySelector("p:not(.card-label)")?.textContent ||
        "Event details will be confirmed here.";
      const cardImage = card.querySelector("img");
      if (cardImage && modalImage) {
        modalImage.src = cardImage.src;
        modalImage.alt = cardImage.alt;
      }
      exhibitionModal.classList.add("is-open");
      exhibitionModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      closeButton?.focus();
    });
  });

  closeButton?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && exhibitionModal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    if (status) {
      status.textContent =
        "Form layout complete — connect ABERO’s email inbox or CRM to receive submissions.";
    }
  });
});
