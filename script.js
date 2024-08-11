const navMenu = document.querySelector('.nav__menu');
const navButtons = document.querySelector('.nav__buttons');
const navToggleBtn = document.querySelector('.nav__toggleBtn');

function showMobileMenu() {
  navMenu.classList.add('show');
  navButtons.classList.add('show');
  navToggleBtn.classList.add('close');
}

function hideMobileMenu() {
  navMenu.classList.remove('show');
  navButtons.classList.remove('show');
  navToggleBtn.classList.remove('close');
}

navToggleBtn.addEventListener('click', () => {
  isVissible = navToggleBtn.classList.contains('close');
  if(isVissible) {
    hideMobileMenu();
  }else {
    showMobileMenu();
  }
})