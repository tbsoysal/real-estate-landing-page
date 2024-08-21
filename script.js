const navMenu = document.querySelector(".nav__menu");
const navButtons = document.querySelector(".nav__buttons");
const navToggleBtn = document.querySelector(".nav__toggleBtn");
const selectMenu = document.querySelectorAll(".hero__select-menu a");
const selectButtons = document.querySelectorAll(".selectcontainer button");
const testimonialProfiles = document.querySelectorAll(".testimonials ul li");

function showMobileMenu() {
  navMenu.classList.add("show");
  navButtons.classList.add("show");
  navToggleBtn.classList.add("close");
}

function hideMobileMenu() {
  navMenu.classList.remove("show");
  navButtons.classList.remove("show");
  navToggleBtn.classList.remove("close");
}

navToggleBtn.addEventListener("click", () => {
  isVissible = navToggleBtn.classList.contains("close");
  if (isVissible) {
    hideMobileMenu();
  } else {
    showMobileMenu();
  }
});

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !navToggleBtn.contains(e.target)) {
    hideMobileMenu();
  }
});

selectMenu.forEach((element) => {
  element.addEventListener("click", (e) => {
    //if clicked one of them remove the active class from all of them first
    if (element.contains(e.target)) {
      selectMenu.forEach((element) => {
        element.classList.remove("active");
      });

      //then add active class to element that has been clicked
      element.classList.add("active");
    }
  });
});

selectButtons.forEach((btn)=> {
  btn.addEventListener("click", (e) => {
    selectButtons[0].classList.remove('active');
    selectButtons[1].classList.remove('active');
    btn.classList.add('active');
  })
})

testimonialProfiles.forEach((pp)=> {
  pp.addEventListener("click", (e) => {
    testimonialProfiles[0].classList.remove('active');
    testimonialProfiles[1].classList.remove('active');
    testimonialProfiles[2].classList.remove('active');
    pp.classList.add('active');
  })
})
