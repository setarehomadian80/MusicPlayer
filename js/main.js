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
// get data- 

document.addEventListener('DOMContentLoaded' , ()=>{  

  const nameEl = document.getElementById('music-name')
  const artistEl = document.getElementById('artist-name')
  const coverEl = document.getElementById('player-cover')

  // پلیر صوتی 
  const audio = new Audio();
  // برای داشتن مدت رمان آهنگ 
  audio.preload = 'metadata'
  // پلیر صوتی 


  let currentCard = null

 document.addEventListener('click' , (e)=>{
  const card = e.target.closest('.card-box[data-src]')
  if(!card) return



  const {src, title, artist, cover} = card.dataset
  if (!src) return


  if(currentCard === card && !audio.paused){
    audio.pause();
    card.classList.remove('is-playing')
    return;
  }

  // کارت فعال را هایلاین کن
  currentCard?.classList.remove('is-playing')
  card.classList.add('is-playing')
  currentCard = card 

// add data to player
  nameEl.textContent = title
  artistEl.textContent = artist
  if( cover && coverEl) coverEl.src = cover
  // add data to player


  audio.src = src
  audio.play().catch(console.warn)
 });




 audio.addEventListener('ended' ,()=>{
  currentCard?.classList.remove('is-playing')
  currentCard = null
 })
})
// get data- 