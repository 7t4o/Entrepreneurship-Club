const burgerMenu = document.querySelector('.menu');
const header = document.querySelector('header');

burgerMenu.addEventListener('click', function() {
    header.classList.toggle('expanded');
});