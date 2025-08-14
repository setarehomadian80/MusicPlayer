const navBar = document.querySelector("#navBar");
const ThemeBtn = document.querySelector("#ThemeBtn");
const navSpan = document.querySelectorAll("#navBar > ul > li > span");
const navLi = document.querySelectorAll("#navBar > ul > li");

// change theme
click = 1;
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
ThemeBtn.addEventListener("click", () => {
  if (click % 2) {
    navBar.style.background = "var(--change-color-nav)";
    navSpan.forEach((s) => (s.style.color = "black"));
    sun.classList.add("hiddenSpan");
    moon.classList.remove("hiddenSpan");

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
