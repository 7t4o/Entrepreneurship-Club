const burgerMenu = document.querySelector(".menu");
const header = document.querySelector("header");

burgerMenu.addEventListener("click", function () {
    header.classList.toggle("expanded");
});

// background animation for main page
function lazyLoadBackground(el, newImageUrl) {
    const img = new Image();
    img.src = newImageUrl;
    img.onload = () => {
        el.style.backgroundImage = `url('${newImageUrl}')`;
    };
}

const bgDiv = document.getElementById("imageBox");

const images = ['../assets/images/background/bg0.jpg', '../assets/images/background/bg1.jpg', '../assets/images/background/bg2.jpg', '../assets/images/background/bg3.jpg', '../assets/images/background/bg4.jpg', '../assets/images/background/bg5.jpg'];
let index = 0;

setInterval(() => {
    lazyLoadBackground(bgDiv, images[index]);
    index = (index + 1) % images.length;
}, 5000);
