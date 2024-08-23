// script.js

let lastScrollTop = 0;
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
        header.classList.add('header-small');
    }
    
    if (scrollTop === 0) {
        header.classList.remove('header-small');
    }
    
    lastScrollTop = scrollTop;
});

// Toggle hamburger menu
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});