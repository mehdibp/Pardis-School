// Changing menu mode when scrolling --------------------------------------
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) { navbar.classList.add("scrolled"); } 
  else { navbar.classList.remove("scrolled"); }
});

// A function to display more descriptions when clicked on <span> ---------
function MoreLess() {
  var dots     = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText  = document.getElementById("myBtn");

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

// Loading and displaying statistics from a txt file ----------------------
async function loadStats() {

  const res = await fetch("assets/document/stats.txt");
  const text = await res.text();

  // We expect a simple CSV format: year, teachers, equipment, enrolled, alumn
  // Empty lines or lines commented with # are ignored; last valid line => current statistics
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l && !l.startsWith("#"));
  const last = lines[lines.length - 1];
  const parts = last.split(",").map(s => s.trim());

  const [year, teachers, equipment, enrolled, alumni] = parts.map((v, i) => i === 0 ? v : Number(v));
  const map = { teachers, equipment, enrolled, alumni };

  // درج سال
  const yearBadge = document.getElementById("stats-year");
  if (yearBadge) yearBadge.textContent = `آمار سال ${year}`;

  // Maintaining targets for counting animation
  document.querySelectorAll(".stat-value").forEach(el => {
    const key = el.getAttribute("data-key");
    if (key && map[key] != null) {
      el.dataset.target = String(map[key]);
      el.textContent = "0";
    }
  });

  // Countdown animation when section is viewed
  animateStatsOnView();
}

// A function to run a counting animation when the "Statistical information" section comes into view
function animateStatsOnView() {
  const section = document.getElementById("stats");
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
  const io = new IntersectionObserver((entries) => {
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

loadStats();      // Start