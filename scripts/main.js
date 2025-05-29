const burgerMenu = document.querySelector(".menu");
const header = document.querySelector("header");

burgerMenu.addEventListener("click", function () {
    header.classList.toggle("expanded");
});

// background animation for main page
const imageBox = document.getElementById("imageBox");
let currentIndex = 0;

function changeBackground() {
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % 6;
        console.log(currentIndex)
        imageBox.style.backgroundImage = `url("../assets/images/background/bg${currentIndex}.jpg")`;
    }, 1000); 
}

imageBox.style.backgroundImage = `url("../assets/images/background/bg${currentIndex}.jpg")`;
setInterval(changeBackground, 5000);
