// Set random spacing for blog cards
function BlogItemOffsets() {
  const blogItems = document.querySelectorAll(".blog-item");

  const offsets = [0, 20, 40];
  for (let i = 0; i < blogItems.length; i+=3) {
    const group = [blogItems[i], blogItems[i + 1], blogItems[i + 2]].filter(Boolean);

    offsets.sort(() => Math.random() - 0.5);    // Random sorting
    group.forEach((el, idx) => { el.style.marginTop = offsets[idx] + "px"; el.style.marginBottom = offsets[idx] + "px"; });
  }
}

// Set colors and shadows for blog cards
function BlogItemColors() {
  const blogDates = document.querySelectorAll(".blog-date");
  const blogItems = document.querySelectorAll(".blog-item");

  const colors =["#00c389","#ff9800","#e91e63","#3f51b5","#9b27b0","#009688","#f44336","#607d8b","#a7b027"];
  
  for (let i = 0; i < blogItems.length; i++) {
    // const randomColor = colors[Math.floor(Math.random() * colors.length)];

    blogDates[i].style.backgroundColor = colors[i] + "90";
    blogItems[i].style.boxShadow = `inset 0 0px 6px ${colors[i] + "40"}`;

    blogItems[i].addEventListener("mouseenter", () => { blogItems[i].style.boxShadow = `0 5px 15px 5px ${colors[i]+"50"}`; });
    blogItems[i].addEventListener("mouseleave", () => { blogItems[i].style.boxShadow = `inset 0 0px 6px ${colors[i]+"40"}`; });
  }
}


// INIT --------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelectorAll(".blog-date"))        BlogItemOffsets();
  if (document.querySelectorAll(".blog-item"))        BlogItemColors ();
});
