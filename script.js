// Menu --------------------------------------------------------------------------------
const navbar = document.getElementById('navbar');

function updateNavThemeByPoint() {
  const rect = navbar.getBoundingClientRect();
  const x = rect.left + Math.min(20, rect.width / 2);
  const y = rect.top + rect.height / 2;
  const elems = document.elementsFromPoint(x, y);

  const section = elems.find(el =>
    el !== navbar && el.closest?.('section, header, footer')
  )?.closest('section, header, footer');

  if (section) navbar.classList.toggle('light', section.dataset?.theme === 'light');
}

function initNavbar() {
  // Changing menu mode when scrolling 
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  window.addEventListener('resize', updateNavThemeByPoint);
  updateNavThemeByPoint();

  const navObserver = new MutationObserver(() => updateNavThemeByPoint());
  navObserver.observe(navbar, { attributes: true, attributeFilter: ['class', 'style'] });
}


// About -------------------------------------------------------------------------------
function MoreLess() {
  // A function to display more descriptions when clicked on <span>

  const dots     = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText  = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "(توضیحات بیشتر)";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "(توضیحات کمتر)";
    moreText.style.display = "inline";
  }
}


// Statistical information -------------------------------------------------------------
function animateStatsOnView(section) {
  // A function to run a counting animation when the "Statistical information" section comes into view
  let started = false;

  // Built-in function to count from 0 to the target value to
  const countUp = (el, to) => {
    const duration = 1200; // ms --> 1.2s
    const start = performance.now();

    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const val = Math.floor(p * to);
      el.textContent = val.toLocaleString("fa-IR");
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = to.toLocaleString("fa-IR");
    };
    requestAnimationFrame(step);
  };

  // Creates an IntersectionObserver to fire when 35% of the section is in view
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        document.querySelectorAll(".stat-value").forEach(el => {
          const to = Number(el.dataset.target || "0");
          countUp(el, to);
        });
        io.disconnect();
      }
    });
  }, { threshold: 0.35 });

  io.observe(section);
}

async function loadStats() {
  // Loading and displaying statistics from a txt file

  const res = await fetch("assets/document/stats.txt");
  const text = await res.text();
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l && !l.startsWith("#"));
  const last = lines[lines.length - 1];
  const parts = last.split(",").map(s => s.trim());
  const [year, teachers, equipment, enrolled, alumni] = parts.map((v, i) => i === 0 ? v : Number(v));
  const map = { teachers, equipment, enrolled, alumni };

  const yearBadge = document.getElementById("stats-year");
  if (yearBadge) yearBadge.textContent = `آمار سال ${year}`;

  document.querySelectorAll(".stat-value").forEach(el => {
    const key = el.getAttribute("data-key");
    if (key && map[key] != null) {
      el.dataset.target = String(map[key]);
      el.textContent = "0";
    }
  });

  const section = document.getElementById("stats");
  animateStatsOnView(section);
}


// Swipers -----------------------------------------------------------------------------
function initCurriculumSwiper() {
  new Swiper(".CurriculumSwiper", {
    spaceBetween: 30,
    loop: true,                 // Being infinite
    // centeredSlides: true,       // There is always someone in the middle
    grabCursor: true,           // Mouse in the shape of a hand
    slideToClickedSlide: true,  // Click and it will come in the middle
    autoplay: { delay: 10000, disableOnInteraction: false },  // Automatic movement
    keyboard: true,             // Ability to control the slider with the keyboard

    breakpoints: {
      321: { slidesPerView: 1 },
      577: { slidesPerView: 2 },
      993: { slidesPerView: 3 } 
    },

  });
}

function initTeacherSwiper() {
  new Swiper(".TeacherSwiper", {
    spaceBetween: 30,
    loop: true,                 // Being infinite
    // centeredSlides: true,       // There is always someone in the middle
    grabCursor: true,           // Mouse in the shape of a hand
    slideToClickedSlide: true,  // Click and it will come in the middle
    autoplay: { delay: 8000, disableOnInteraction: false },  // Automatic movement
    keyboard: true,             // Ability to control the slider with the keyboard

    breakpoints: {
      321: { slidesPerView: 2 },
      577: { slidesPerView: 3 },
      769: { slidesPerView: 4 }
    },

  });
}


// Events and News ---------------------------------------------------------------------
function initEventAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); });
  }, { threshold: 0.2 });
  document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
}


// Gallery -----------------------------------------------------------------------------
const lightbox    = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(src) { lightbox.style.display = "flex"; lightboxImg.src = src; }
function closeLightbox()   { lightbox.style.display = "none"; lightboxImg.src = ""; }

async function loadGallerySlides() {
  const res = await fetch("./assets/pictures/gallery/gallery.json");
  const gallerySlides = await res.json();
  const container = document.getElementById("gallery-container");

  gallerySlides.forEach(slide => {
    const div = document.createElement("div");
    div.className = "swiper-slide";

    const img = document.createElement("img");
    img.src = slide.src;
    img.alt = "gallery";
    img.addEventListener("click", () => openLightbox(slide.src));

    div.appendChild(img);
    container.appendChild(div);
  });

  new Swiper(".GallerySwiper", {
    spaceBetween: 1,
    loop: true,
    grabCursor: true,
    slideToClickedSlide: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    keyboard: true,

    breakpoints: {
      321: { slidesPerView: 1 },
      426: { slidesPerView: 2 },
      577: { slidesPerView: 3 },
      769: { slidesPerView: 4 },
      993: { slidesPerView: 5 } 
    },

  });
}

function initGallery() {
  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

  loadGallerySlides();
}


// INIT --------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initEventAnimations();
  initCurriculumSwiper();
  initTeacherSwiper();
  loadStats();
  initGallery();
});
