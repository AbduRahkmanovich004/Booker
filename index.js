// forSlide //
const menuSlide = document.querySelector(".part_features");
const menuSlideH4 = document.querySelectorAll(".part_features h4");
const slide = document.querySelectorAll(".slide");

function goSlide(acticve) {
  menuSlideH4.forEach((event) => event.classList.remove("h4_Features_active"));
  acticve.classList.add("h4_Features_active");
  let silideNum = acticve.dataset.num;
  slide.forEach((e) => {
    e.style.transform = `translateX(-${100 * silideNum}%)`;
  });
}
let currentSlide = document.querySelector(".part_features h4");
menuSlide.addEventListener("click", (e) => {
  e.preventDefault();
  currentSlide = e.target;
  goSlide(currentSlide);
});

// accardion
const accardion = document.querySelector(".accardion");
const accardions = document.querySelectorAll(".accardion .acc");

accardion.addEventListener("click", (e) => {
  let target = e.target.closest(".acc");
  if (!target.classList.contains("acc_active")) {
    accardions.forEach((even) => even.classList.remove("acc_active"));
    target.classList.add("acc_active");
  } else {
    accardions.forEach((even) => even.classList.remove("acc_active"));
  }
});

// for input
const input = document.querySelector(".input");
const inputText = input.querySelector("input");
const input1 = input.querySelector(".drop");
const inputT = input.querySelector(".dropT");
const inputError = input.querySelector(".error");
const inputBtn = input.querySelector(".btn");
inputError.style.backgraund = "green !important";

function isEmail(e) {
  e.preventDefault;
  let email = inputText.value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setTimeout(function () {
      input1.classList.remove("hidden");
      inputError.classList.remove("hidden");
    }, 1000);
    input1.classList.add("hidden");
    inputError.classList.add("hidden");
  } else {
    input1.classList.add("hidden");
    inputError.classList.add("hidden");
    inputT.classList.remove("hidden");
    setTimeout(() => {
        inputT.classList.add("hidden");
    }, 1000);
  }
}

inputBtn.addEventListener("click", isEmail);
document.addEventListener("keydown",e=>{
    if(e.key == "Enter"){
        isEmail(e)
    }
})


// for burger
const burgerBtn = document.querySelector(".burger")
const sectionBurger = document.querySelector(".for_burger")
const xBtn = sectionBurger.querySelector("h3")

burgerBtn.addEventListener("click",()=>{
    sectionBurger.classList.add("show_burger")
})
xBtn.addEventListener("click",()=>{
    sectionBurger.classList.remove("show_burger")
})
sectionBurger.addEventListener("click",()=>{
    sectionBurger.classList.remove("show_burger")
})
