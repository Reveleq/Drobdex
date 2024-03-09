const burgerBtn = document.querySelector(".mobile-nav__btn");
const closeBtn = document.querySelector(".mobile-nav__close-btn");
const mobileNavLinks = document.querySelector(".mobile-nav__links");
const allMobileLink = document.querySelectorAll(".mobile-nav__link");
const accordion = document.querySelector(".gallery__accordion");
const accordionBtns = document.querySelectorAll(".gallery__accordion-btn");
const imgBtn = document.querySelectorAll(".gallery__accordion-card-btn");
const closePopupBtn = document.querySelectorAll(
  ".gallery__accordion-card-popup-close"
);
const popupBg = document.querySelectorAll(".gallery__accordion-card-popup-bg");
const footerSpan = document.querySelector(".footer__down-span");
const scrollbtn = document.querySelector(".scroll-up");
const scrollLink = document.querySelector(".scroll-up__btn");
const year = new Date().getFullYear();
const firstAccordion = document.querySelectorAll('.gallery__accordion-first')

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
  mobileNavLinks.classList.add("active-nav");
  burgerBtn.classList.add("jello");
  setTimeout(() => {
    burgerBtn.classList.remove("jello");
  }, 501);
};
const hideLinks = () => {
  mobileNavLinks.classList.remove("active-nav");
  closeBtn.classList.add("jello");
  setTimeout(() => {
    closeBtn.classList.remove("jello");
  }, 501);
};
allMobileLink.forEach((link) =>
  link.addEventListener("click", () => {
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
    e.previousElementSibling.classList.remove("animation-hide");
    e.previousElementSibling.classList.add("active-popup");
    e.previousElementSibling.classList.add("animation-show");
    scrollbtn.classList.add('opacity')

  });
});
closePopupBtn.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.classList.add("animation-hide");
    e.parentElement.classList.remove("animation-show");
    scrollbtn.classList.remove('opacity')
    setTimeout(() => {
      e.parentElement.classList.remove("active-popup");
    }, 501);
  });
});
popupBg.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.classList.add("animation-hide");
    e.parentElement.classList.remove("animation-show");
    scrollbtn.classList.remove('opacity')
    setTimeout(() => {
      e.parentElement.classList.remove("active-popup");
    }, 501);
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
