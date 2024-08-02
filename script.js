const mobileMenu = document.querySelector('.nav__mobile-menu');
const hamburgerIcon = document.querySelector('.nav__hamburger');
const closeIcon = document.querySelector('.nav__closemenu');
const navbar = document.querySelector('.nav');

hamburgerIcon.addEventListener('click', ()=> {
    mobileMenu.classList.add('active');
    navbar.style.overflow = 'visible';
});
closeIcon.addEventListener('click', ()=> {
    mobileMenu.classList.remove('active');
    navbar.style.overflow = 'hidden';
});
