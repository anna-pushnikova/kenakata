function ready() {
  let navToggler = document.getElementById("nav-toggler"),
      nav = document.getElementById("nav"),
      header = document.getElementById("header"),
      headerHeight = header.clientHeight,
      navMenu = document.getElementById("nav-menu");

  toggleNavClass()

  function toggleNavClass () {
    if (window.scrollY > headerHeight) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  }

  // Fixed Navbar

  document.addEventListener("scroll", function() {
    toggleNavClass()
    navToggler.classList.remove("active");
    navMenu.classList.remove("show");
  })

  navToggler.addEventListener("click", function() {
    this.classList.toggle("active");
    navMenu.classList.toggle("show");
  })
}


document.addEventListener("DOMContentLoaded", ready);

// Show preloader until BG is loaded

const preloader = document.getElementById('preloader');
const pageContent = document.getElementById('content');

const img = new Image;
img.onload = function() {
  pageContent.style.display = "block";
  preloader.style.display = "none";
} 
img.src = "/images/bg/BG.jpg";