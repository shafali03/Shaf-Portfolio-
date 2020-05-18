
/* =========================================
                Navigation
============================================ */

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let navIconToggle = document.querySelector("#nav-icon");

navBarToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
  mainNav.classList.add('smNav')

});

navIconToggle.addEventListener("click", () => {
  navIconToggle.classList.toggle("active"); mainNav.classList.remove('smNav')

});


/* =========================================
                Navigation scroll
============================================ */


window.addEventListener('scroll', () => {


  const nav = document.querySelector('nav');
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  // const aboutText = document.querySelector('.about__text');


  if (Math.ceil(scrolled) === scrollable || scrolled > 100) {
    nav.classList.add('sticky');
  }

  else {
    (scrolled === scrollable || scrolled < 0)
    nav.classList.remove('sticky');
    nav.classList.add('noSticky')

  }
});

