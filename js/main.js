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
    searchBox.style.color = "black";
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
    searchBox.style.color = "white";
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
});

// change theme *
// get data-

document.addEventListener("DOMContentLoaded", () => {
  const nameEl = document.getElementById("music-name");
  const artistEl = document.getElementById("artist-name");
  const coverEl = document.getElementById("player-cover");
  ///////////////////
  const btnPrev = document.querySelector(".prev");
  const btnNext = document.querySelector(".next");
  const btnPlay = document.querySelector("#player .play");
  const icoPlay = document.getElementById("ico-play"); // اگر idهای قدیمی‌ت رو نگه داشتی، از querySelector('#-play') استفاده کن
  const icoPause = document.getElementById("ico-pause");
  const cards = Array.from(document.querySelectorAll(".card-box[data-src]"));
  const cardCon = document.getElementById("cardCon");
  //////////
  const navAll = document.getElementById("navAll"); // <li id="navAll">All Music</li>
  const navFav = document.getElementById("navFav");
  /////////////
  const allCards = Array.from(document.querySelectorAll(".card-box"));

  function showPlayIcon() {
    icoPlay?.classList.remove("hidden");
    icoPause?.classList.add("hidden");
  }

  function showPauseIcon() {
    // نمایش آیکن Pause، مخفی کردن Play
    icoPause?.classList.remove("hidden");
    icoPlay?.classList.add("hidden");
  }

  // پلیر صوتی
  const audio = new Audio();
  // برای داشتن مدت رمان آهنگ
  audio.preload = "metadata";
  // پلیر صوتی

  let currentCard = null;

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".card-box[data-src]");
    if (!card) return;

    const { src, title, artist, cover } = card.dataset;
    if (!src) return;

    if (currentCard === card && !audio.paused) {
      audio.pause();
      card.classList.remove("is-playing");
      showPlayIcon();
      return;
    }

    // کارت فعال را هایلاین کن
    currentCard?.classList.remove("is-playing");
    card.classList.add("is-playing");
    currentCard = card;

    // add data to player
    nameEl.textContent = title;
    artistEl.textContent = artist;
    if (cover && coverEl) coverEl.src = cover;

    // add data to player

    audio.src = src;
    audio.play().catch(console.warn);
    showPauseIcon();
  });

  audio.addEventListener("ended", () => {
    // btnNext?.click();
    currentCard?.classList.remove("is-playing");
    currentCard = null;
  });
  // دکمه برای پخش و استاپ آهنگ

  btnPlay?.addEventListener("click", () => {
    if (!currentCard) return; // ساده: بدون کارت انتخابی کاری نکن
    if (audio.paused) {
      audio.play().catch(console.warn);
      showPauseIcon();
    } else {
      audio.pause();
      showPlayIcon();
    }
  });
  // دکمه برای پخش و استاپ آهنگ

  // دکمه قبل و بعد
  btnNext?.addEventListener("click", () => {
    if (!cards.length) return;

    if (!currentCard) {
      const card = cards[0];

      card.classList.add("is-playing");
      currentCard = card;
      const { title, artist, cover, src } = card.dataset;
      nameEl.textContent = title || "—";
      artistEl.textContent = artist || "—";
      if (cover && coverEl) coverEl.src = cover;

      // پخش
      audio.src = src;
      audio.play().catch(console.warn);
      showPauseIcon();
      return;
    }

    // اگر کارت فعلی داریم: شماره‌اش را پیدا کن
    const i = cards.indexOf(currentCard);
    // درصد باعث میشود لیست دایره ای شود و برود به اول لیست
    const nextIndex = (i + 1) % cards.length;
    const nextCard = cards[nextIndex];

    // اگر کارت فعلی داریم: شماره‌اش را پیدا کن

    // برداشتن هایلایت قبلی و گذاشتن روی جدید
    currentCard.classList.remove("is-playing");
    nextCard.classList.add("is-playing");
    currentCard = nextCard;

    const { title, artist, cover, src } = nextCard.dataset;
    nameEl.textContent = title || "—";
    artistEl.textContent = artist || "—";
    if (cover && coverEl) coverEl.src = cover;

    audio.src = src;
    audio.play().catch(console.warn);
    showPauseIcon();
  });
  // دکمه قبل و بعد

  /////////////////////////////////
  btnPrev?.addEventListener("click", () => {
    if (!cards.length) return;

    // اگر هنوز چیزی انتخاب نشده، از آخر شروع کن
    if (!currentCard) {
      const card = cards[cards.length - 1];

      card.classList.add("is-playing");
      currentCard = card;
      const { title, artist, cover, src } = card.dataset;
      nameEl.textContent = title || "—";
      artistEl.textContent = artist || "—";
      if (cover && coverEl) coverEl.src = cover;

      audio.src = src;
      audio.play().catch(console.warn);
      showPauseIcon();
      return;
    }

    // اگر کارت فعلی داریم: شماره‌اش را پیدا کن
    const i = cards.indexOf(currentCard);
    const prevIndex = (i - 1 + cards.length) % cards.length;
    const prevCard = cards[prevIndex];

    currentCard.classList.remove("is-playing");
    prevCard.classList.add("is-playing");
    currentCard = prevCard;

    const { title, artist, cover, src } = prevCard.dataset;
    nameEl.textContent = title || "—";
    artistEl.textContent = artist || "—";
    if (cover && coverEl) coverEl.src = cover;

    audio.src = src;
    audio.play().catch(console.warn);
    showPauseIcon();
  });

  // nav
  allCards.forEach((c, i) => {
    if (!c.dataset.fav) c.dataset.fav = "0"; // 0 = غیرعلاقه‌مندی، 1 = علاقه‌مندی
    if (!c.dataset.id) c.dataset.id = String(i);
  });

  cardCon.addEventListener("click", (e) => {
    const btn = e.target.closest(".fav-btn");
    if (!btn) return;

    e.stopPropagation();
    e.preventDefault();

    const card = btn.closest(".card-box");
    const empty = btn.querySelector(".icon-heart-empty");
    const full = btn.querySelector(".icon-heart");

    //  const nowFav = card.dataset.fav !== '1';
    //   card.dataset.fav = nowFav ? '1' : '0'
    //   btn.setAttribute('aria-pressed', nowFav ? 'true' : 'false');

    let nowFav;
    if (card.dataset.fav !== "1") {
      nowFav = true; // قبلاً علاقه‌مندی نبود → حالا بکنیمش علاقه‌مندی
    } else {
      nowFav = false; // قبلاً علاقه‌مندی بود → حالا برداریمش
    }

    if (nowFav) {
      card.dataset.fav = "1";
      btn.setAttribute("aria-pressed", "true");
    } else {
      card.dataset.fav = "0";
      btn.setAttribute("aria-pressed", "false");
    }

    //  button
    if (nowFav) {
      empty?.classList.add("hidden");
      full?.classList.remove("hidden");
    } else {
      full?.classList.add("hidden");
      empty?.classList.remove("hidden");
    }
  });

  // navbar
  navAll?.addEventListener("click", () => {
    allCards.forEach((c) => {
      c.classList.remove("hidden");
    });
  });

  navFav?.addEventListener("click", () => {
    allCards.forEach((c) => {
      const isFav = c.dataset.fav === "1";
      c.classList.toggle("hidden", !isFav);
    });
  });

  // volume
  const volumeControl = document.querySelector("#volumeControl");

  volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
  });

  // list
  const list = document.getElementById("list");
  const grid = document.getElementById("grid");

  list.addEventListener("click", () => {
    const card = document.querySelectorAll(".card-box");

    card.forEach((c) => {
      if (c.classList.contains("card-box")) {
        c.classList.remove("card-box");
        c.classList.add("card-box-list");
      } else {
        c.classList.remove("card-box-list");
        c.classList.add("card-box");
      }
    });
  });

  grid.addEventListener("click", () => {
    const card = document.querySelectorAll(".card-box-list");
 
    card.forEach((c) => {
     if(c.classList.contains("card-box-list")){
       c.classList.remove("card-box-list");
       c.classList.add("card-box");
     } else{
       c.classList.remove("card-box");
       c.classList.add("card-box-list");
     }
    });
  });
});
// get data-
