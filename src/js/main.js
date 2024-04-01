const mobileNav = document.querySelector(".mobile-nav");
const desktopNav = document.querySelector(".desktop-nav");
const burgerBtn = document.querySelector(".mobile-nav__btn");
const closeBtn = document.querySelector(".mobile-nav__close-btn");
const mobileNavLinks = document.querySelector(".mobile-nav__links");
const allMobileLink = document.querySelectorAll(".mobile-nav__link");
const accordion = document.querySelector(".gallery__accordion");
const accordionBtns = document.querySelectorAll(".gallery__accordion-btn");
const imgBtn = document.querySelectorAll(".gallery__accordion-card-btn");
const headerHero = document.querySelector(".header-hero");
const closePopupBtn = document.querySelectorAll(
  ".gallery__accordion-card-popup-close"
);
const popupBg = document.querySelectorAll(".gallery__accordion-card-popup-bg");
const footerSpan = document.querySelector(".footer__down-span");
const scrollbtn = document.querySelector(".scroll-up");
const scrollLink = document.querySelector(".scroll-up__btn");
const year = new Date().getFullYear();
const firstAccordion = document.querySelectorAll(".gallery__accordion-first");
const style = document.createElement("style");
const acordionBtn = document.querySelectorAll(".gallery__accordion-btn");
style.textContent = `
  body {
    overflow: hidden;
  }`;
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 190 ||
    document.documentElement.scrollTop > 190
  ) {
    headerHero.classList.add("margin-top");
    mobileNav.classList.add("fixed");
    desktopNav.classList.add("fixed");
    // style = document.createElement("style");
    // style.innerHTML("html{scroll-padding-top: 5rem;}");
    // document.body.appendChild(style);
  } else {
    headerHero.classList.remove("margin-top");
    mobileNav.classList.remove("fixed");
    desktopNav.classList.remove("fixed");
    // document.body.removeChild(style);}
  }
});
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollbtn.classList.add("active-btn");
    setTimeout(() => {
      scrollbtn.classList.add("right");
    }, 1);
  } else {
    scrollbtn.classList.remove("right");
    setTimeout(() => {
      scrollbtn.classList.remove("active-btn");
    }, 100);
  }
});
footerSpan.textContent = year;
const showLinks = () => {
  // if (
  //   window.document.body.scrollTop < 190 ||
  //   window.document.documentElement.scrollTop < 190
  // ) {
  // window.scrollTo(0, 190);
  mobileNavLinks.classList.add("active-nav");
  burgerBtn.classList.add("jello");
  setTimeout(() => {
    burgerBtn.classList.remove("jello");
    document.body.appendChild(style);
  }, 501);

  //   window.document.body.scrollTop > 190 ||
  //   window.document.documentElement.scrollTop > 190
  // )
  // }else{
  // mobileNavLinks.classList.add("active-nav");
  // burgerBtn.classList.add("jello");
  // setTimeout(() => {
  //   burgerBtn.classList.remove("jello");
  //   document.body.appendChild(style);
  // }, 501);
  // }
};
const hideLinks = () => {
  document.body.removeChild(style);
  mobileNavLinks.classList.remove("active-nav");
  closeBtn.classList.add("jello");
  setTimeout(() => {
    closeBtn.classList.remove("jello");
  }, 501);
};
allMobileLink.forEach((link) =>
  link.addEventListener("click", () => {
    document.body.removeChild(style);
    mobileNavLinks.classList.remove("active-nav");
  })
);
function openAccordionItems() {
  if (this.nextElementSibling.classList.contains("active")) {
    this.nextElementSibling.classList.toggle("active");
  } else {
    closeAccordionItem();
    this.nextElementSibling.classList.toggle("active");
  }
}

const closeAccordionItem = () => {
  const allActiveItems = document.querySelectorAll(".gallery__accordion-card");
  allActiveItems.forEach((item) => item.classList.remove("active"));
};

accordionBtns.forEach((btn) =>
  btn.addEventListener("click", openAccordionItems)
);
imgBtn.forEach((e) => {
  e.addEventListener("click", () => {
    document.body.appendChild(style);
    e.previousElementSibling.classList.remove("animation-hide");
    e.previousElementSibling.classList.add("active-popup");
    e.previousElementSibling.classList.add("animation-show");
    scrollbtn.classList.add("opacity");
    headerHero.classList.remove("margin-top");
    mobileNav.classList.remove("fixed");
    desktopNav.classList.remove("fixed");
    acordionBtn.forEach((btn) => btn.classList.add("opacity"));
  });
});
closePopupBtn.forEach((e) => {
  e.addEventListener("click", () => {
    document.body.removeChild(style);
    e.parentElement.classList.add("animation-hide");
    e.parentElement.classList.remove("animation-show");
    scrollbtn.classList.remove("opacity");
    headerHero.classList.add("margin-top");
    acordionBtn.forEach((btn) => btn.classList.remove("opacity"));
    e.parentElement.classList.remove("active-popup");
    mobileNav.classList.add("fixed");
    desktopNav.classList.add("fixed");
  });
});
popupBg.forEach((e) => {
  e.addEventListener("click", () => {
    document.body.removeChild(style);
    e.parentElement.classList.add("animation-hide");
    e.parentElement.classList.remove("animation-show");
    scrollbtn.classList.remove("opacity");
    headerHero.classList.add("margin-top");
    mobileNav.classList.add("fixed");
    desktopNav.classList.add("fixed");
    acordionBtn.forEach((btn) => btn.classList.remove("opacity"));

    e.parentElement.classList.remove("active-popup");
  });
});
closeBtn.addEventListener("click", hideLinks);
burgerBtn.addEventListener("click", showLinks);
scrollbtn.addEventListener("click", () => {
  scrollbtn.classList.add("heartbeat");
  setTimeout(() => {
    scrollbtn.classList.remove("heartbeat");
  }, 501);
});
scrollLink.addEventListener("click", () => {
  setTimeout(() => window.scrollTo(0, 0), 50);
});
