let up = document.querySelector("#up");
let burgerMenu = document.querySelector("#burger-menu");
let navMenu = document.querySelector("#nav-menu");
let xMenu = document.querySelector("#x-menu");

window.onscroll = function () {
  if (this.scrollY >= "650") {
    up.classList.add("flex");
  } else {
    up.classList.remove("flex");
  }
};

up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

burgerMenu.addEventListener("click", () => {
  navMenu.classList.add("show");
});

xMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

window.addEventListener("scroll", () => {
  navMenu.classList.remove("show");
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.sr = ScrollReveal({
  origin: "bottom",
  duration: 500,
  delay: 200,
  easing: "ease-out",
  distance: "20px",
});

sr.reveal("#nav", {
  opacity: 0,
  origin: "top",
});

sr.reveal("#hero-text", {
  origin: "left",
  opacity: 0,
  delay: 400,
});

sr.reveal("#hero-img", {
  origin: "right",
  opacity: 0,
  delay: 400,
});

sr.reveal("#about-title", {
  origin: "right",
  delay: 500,
});

sr.reveal("#about-description", {
  origin: "left",
  delay: 400,
});

sr.reveal("#about-numbers", {
  origin: "right",
  delay: 400,
});

sr.reveal("#services-title", {
  origin: "left",
  delay: 400,
});

sr.reveal("#services-description", {
  origin: "right",
  delay: 500,
});

sr.reveal("#services-grid", {
  origin: "left",
  delay: 600,
});

sr.reveal("#cart-services", {
  origin: "top",
  delay: 700,
  duration: 1000,
  scale: 0.5,
});

sr.reveal("#portfolio-title", {
  origin: "left",
  delay: 400,
});

sr.reveal("#portfolio-description", {
  origin: "right",
  delay: 500,
});

sr.reveal("#cart-portfolio", {
  origin: "center",
  delay: 500,
  duration: 1000,
  interval: 200,
  scale: 0.5,
});

sr.reveal("#design-title", {
  origin: "left",
  delay: 500,
});

sr.reveal("#design-description", {
  origin: "right",
  delay: 500,
});

sr.reveal("#skills-left", {
  origin: "left",
  delay: 600,
});

sr.reveal("#skills-right", {
  origin: "right",
  delay: 700,
});

sr.reveal("#testemonials-title", {
  delay: 700,
});

sr.reveal("#testemonials-cart", {
  delay: 700,
});

sr.reveal("#blog-title", {
  origin: "left",
  delay: 400,
});

sr.reveal("#blog-description", {
  origin: "right",
  delay: 500,
});

sr.reveal("#cart-blog", {
  origin: "center",
  delay: 500,
  duration: 1000,
  interval: 200,
  scale: 0.5,
});

sr.reveal("#contact-left", {
  origin: "left",
  delay: 400,
});

sr.reveal("#contact-right", {
  origin: "right",
  delay: 500,
});

sr.reveal("#footer-content-one", {
  delay: 800,
});

sr.reveal("#footer-content-two", {
  delay: 300,
});
