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
