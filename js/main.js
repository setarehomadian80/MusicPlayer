const navBar = document.querySelector("#navBar");
const ThemeBtn = document.querySelector("#ThemeBtn");
const navSpan = document.querySelectorAll("#navBar > ul > li > span");
const navLi = document.querySelectorAll("#navBar > ul > li");
const mainSec = document.querySelector("#mainSec");
const listener = document.querySelector("#listener");
const hTitle = document.querySelector("#h-title");
const searchBox = document.querySelector("#searchBox");
const cardBox = document.querySelector(".card-box");

// change theme

// change theme span////////////////////
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
// change theme span////////////////////
searchBox.classList.add("searchShadow", "ph-white");

click = 1;
ThemeBtn.addEventListener("click", () => {
  if (click % 2) {
    navBar.style.background = "var(--change-color-nav)";
    navSpan.forEach((s) => (s.style.color = "black"));
    sun.classList.add("hiddenSpan");
    moon.classList.remove("hiddenSpan");
    navBar.classList.add("navShadow");

    // mainSec
    mainSec.style.background = "var(--change-color-section)";
    listener.style.color = "black";
    hTitle.style.color = "black";
    // mainSec

    // search box
    searchBox.style.background = "var(--change-color-nav)";
    searchBox.classList.remove("ph-white");
    searchBox.classList.add("ph-black");
    searchBox.style.color = ("black");
    // search box
   
    navLi.forEach((li) => {
      li.addEventListener("mouseenter", () =>
        li.querySelectorAll("span").forEach((s) => (s.style.color = "white"))
      );
      li.addEventListener("mouseleave", () =>
        li.querySelectorAll("span").forEach((s) => (s.style.color = "black"))
      );
    });
  } else {
    navBar.style.background = " var(--main-color-nav)";
    navSpan.forEach((s) => (s.style.color = "white"));
    moon.classList.add("hiddenSpan");
    sun.classList.remove("hiddenSpan");

    // search box
    searchBox.style.background = "var(--main-color-nav)";
    searchBox.classList.add("ph-white");
    searchBox.classList.remove("ph-black");
    searchBox.style.color = ("white");
    // search box

    // mainSec
    mainSec.style.background = "var(--main-color-section)";
    listener.style.color = "white";
    hTitle.style.color = "white";

    // mainSec

    navLi.forEach((li) => {
      li.addEventListener("mouseenter", () =>
        li.querySelectorAll("span").forEach((s) => (s.style.color = "white"))
      );
      li.addEventListener("mouseleave", () =>
        li.querySelectorAll("span").forEach((s) => (s.style.color = "white"))
      );
    });
  }
  click++;
});

// change theme *
