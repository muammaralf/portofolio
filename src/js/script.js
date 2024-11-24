// Navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const navScroll = document.querySelector("#nav-menu");
  const navFixed = header.offsetTop;

  if (window.pageYOffset > navFixed) {
    header.classList.add("navbar-fixed");
    document.getElementById("#nav-menu").style.paddingTop = "16px";
  } else {
    header.classList.remove("navbar-fixed");
    document.getElementById("#nav-menu").style.paddingTop = "0px";
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("nav-menu-active");
});
