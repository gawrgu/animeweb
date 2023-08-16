let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".my-navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-time");
  navbar.classList.toggle("active");
};

let mn = document.querySelector("#menu-bars");
document.addEventListener("click", function (e) {
  if (!mn.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
var swiper = new Swiper(".home-slider", {
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnIntecation: false,
  },
  loop: true,
});

var swiper = new Swiper(".anime-swiper", {
  loop: true,

  autoplay: {
    delay: 7500,
    disableOnIntecation: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
