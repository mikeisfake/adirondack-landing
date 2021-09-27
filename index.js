const slidesContainer = document.querySelector(".slides-container");
const slides = Array.from(document.querySelectorAll(".slide"));

//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const navBtns = Array.from(document.querySelectorAll(".nav-btn"));
const indicators = Array.from(document.querySelectorAll(".indicator"));

let counter = 0;
let size;

//when i click the button show target slide
nextBtn.addEventListener("click", () => {
  counter++;
  size = slides[counter - 1].clientWidth;
  slidesContainer.style.transform = `translateX(-${size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  counter--;
  size = slides[counter].clientWidth;
  slidesContainer.style.transform = `translateX(-${size * counter}px)`;
});

navBtns.forEach((button) => {
  button.addEventListener("click", () => {
    //add background to indicator for active slide and remove if not active
    indicators.forEach((indicator, i) => {
      if (counter === i) {
        indicator.classList.add("bg-white");
      } else {
        indicator.classList.remove("bg-white");
      }
    });

    //check if there is another slide and remove arrow button if not
    if (counter === 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
    }
    if (counter === slides.length - 1) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }
  });
});

//for initial page load
if (counter === 0) {
  prevBtn.style.display = "none";
  indicators[0].classList.add("bg-white");
}

//handle menu
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

const handleBurger = () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else if (!menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
};

burger.addEventListener("click", handleBurger);
