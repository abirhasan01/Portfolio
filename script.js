const menuList = document.querySelector(".navbar-ul");
const menuBar = document.querySelector(".menubar");
menuList.style.maxHeight = "0px";
menuBar?.addEventListener("click", () => {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "250px";
    menuList.style.border = "2px solid rgb(128, 128, 128)";
  } else {
    menuList.style.maxHeight = "0px";
    menuList.style.border = "none";
  }
});

// variables
let lightControlBtn = document.querySelector(".light-control-darkmode");
let body = document.querySelector("body");
let navBar = document.querySelectorAll(".navbar-list a");
let aboutMeDesc = document.querySelector(".about-desc-text");
let allElement = document.querySelectorAll(".allElement");
// lightControl function
const lightControl = () => {
  lightControlBtn?.addEventListener("click", function () {
    body?.classList.toggle("dark-mode");
    aboutMeDesc?.classList.toggle("color");
    //
    navBar.forEach((links) => {
      links.classList.toggle("color");
    });
    allElement.forEach((Elements) => {
      Elements.classList.toggle("color1");
    });
  });
};
lightControl();

// loading
window.addEventListener("load", () => {
  let loading = document.querySelector(".loading");
  loading?.classList.add("loading-hidden");
});
