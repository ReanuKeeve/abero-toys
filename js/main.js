const translations = window.ABERO_TRANSLATIONS || { ru: {} };
const textOriginals = new WeakMap();
const elementTextOriginals = new WeakMap();
const attributeOriginals = new WeakMap();
const translatableAttributes = ["alt", "aria-label", "placeholder", "title"];
const originalDocumentTitle = document.title;
const descriptionMeta = document.querySelector('meta[name="description"]');
const originalDescription = descriptionMeta?.getAttribute("content") || "";

let activeLanguage = "en";

function normalizeTranslationKey(value) {
  return String(value).replace(/\s+/g, " ").trim();
}

function translate(value, language = activeLanguage) {
  if (language !== "ru") return value;
  const key = normalizeTranslationKey(value);
  return translations.ru?.[key] || value;
}

function ensureLanguageSwitcher() {
  const navigation = document.querySelector(".main-nav");
  if (!navigation || navigation.querySelector(".language-switcher")) return;

  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.setAttribute("role", "group");
  switcher.setAttribute("aria-label", "Language");
  switcher.innerHTML = `
    <button class="language-option" type="button" data-language="en" aria-label="Switch to English">EN</button>
    <button class="language-option" type="button" data-language="ru" aria-label="Switch to Russian">RU</button>
  `;

  navigation.appendChild(switcher);

  switcher.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.language);
      navigation.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
      menuToggle?.setAttribute("aria-label", translate("Open menu"));
    });
  });
}

function translateTextNodes(language) {
  const handledElements = new WeakSet();

  document.body.querySelectorAll("*").forEach((element) => {
    if (element.children.length || ["SCRIPT", "STYLE"].includes(element.tagName)) return;
    const current = normalizeTranslationKey(element.textContent);
    if (!current) return;

    if (!elementTextOriginals.has(element)) elementTextOriginals.set(element, current);
    const original = elementTextOriginals.get(element);
    element.textContent = language === "ru" ? translate(original, language) : original;
    handledElements.add(element);
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];

  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    if (!node.parentElement || ["SCRIPT", "STYLE"].includes(node.parentElement.tagName)) return;
    if (handledElements.has(node.parentElement)) return;
    const current = normalizeTranslationKey(node.nodeValue);
    if (!current) return;

    if (!textOriginals.has(node)) textOriginals.set(node, current);
    const original = textOriginals.get(node);
    node.nodeValue = language === "ru" ? translate(original, language) : original;
  });
}

function translatePageAttributes(language) {
  document.querySelectorAll("*").forEach((element) => {
    translatableAttributes.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;

      let originals = attributeOriginals.get(element);
      if (!originals) {
        originals = {};
        attributeOriginals.set(element, originals);
      }

      if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
      const original = originals[attribute];
      element.setAttribute(attribute, language === "ru" ? translate(original, language) : original);
    });
  });
}

function applyLanguage(language) {
  activeLanguage = language === "ru" ? "ru" : "en";
  document.documentElement.lang = activeLanguage;
  document.documentElement.dataset.language = activeLanguage;
  document.body.classList.toggle("language-russian", activeLanguage === "ru");

  translateTextNodes(activeLanguage);
  translatePageAttributes(activeLanguage);

  document.title = activeLanguage === "ru"
    ? translate(originalDocumentTitle, activeLanguage)
    : originalDocumentTitle;

  if (descriptionMeta) {
    descriptionMeta.setAttribute(
      "content",
      activeLanguage === "ru" ? translate(originalDescription, activeLanguage) : originalDescription
    );
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelectorAll("[data-i18n-source]").forEach((element) => {
    element.textContent = translate(element.dataset.i18nSource, activeLanguage);
  });

  try {
    localStorage.setItem("abero-language", activeLanguage);
  } catch (error) {
    console.warn("Language preference could not be saved:", error);
  }

  document.dispatchEvent(
    new CustomEvent("abero:languagechange", { detail: { language: activeLanguage } })
  );
}

function getSavedLanguage() {
  try {
    return localStorage.getItem("abero-language") === "ru" ? "ru" : "en";
  } catch (error) {
    return "en";
  }
}

const menuToggle = document.querySelector(".mobile-menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", translate(isOpen ? "Close menu" : "Open menu"));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", translate("Open menu"));
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
      const cardTitleNode = card.querySelector("h3")?.firstChild;
      const cardDescriptionNode = card.querySelector("p:not(.card-label)")?.firstChild;
      const titleSource = textOriginals.get(cardTitleNode) || "ABERO event update";
      const descriptionSource =
        textOriginals.get(cardDescriptionNode) || "Event details will be confirmed here.";

      modalTitle.dataset.i18nSource = titleSource;
      modalDescription.dataset.i18nSource = descriptionSource;
      modalTitle.textContent = translate(titleSource);
      modalDescription.textContent = translate(descriptionSource);
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
      status.dataset.i18nSource =
        "Form layout complete — connect ABERO’s email inbox or CRM to receive submissions.";
      status.textContent = translate(status.dataset.i18nSource);
    }
  });
});

ensureLanguageSwitcher();
applyLanguage(getSavedLanguage());
