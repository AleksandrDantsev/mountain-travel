"use strict";
const mainAreaContent = document.querySelector(".main-forest");
const mainChoise = document.querySelector(".main__choise");
const body = document.body;
const header = document.querySelector("header");
const forestImage = document.querySelector(".main-forest img");
const mainForest = document.querySelector(".main-forest");
const cloudsImages = document.querySelector(".main-cloud");

window.addEventListener("scroll", scrollWindow);
mainForest.addEventListener("mousemove", dodgeMountain);

if (window.innerWidth < 700) {
	mainForest.removeEventListener("mousemove", dodgeMountain);
}

mainChoise.style.marginTop = `-${mainChoise.offsetHeight / 2}px`;

function scrollWindow() {
    let scroll = this.scrollY;
    body.style.cssText = `--scrollParallax: ${scroll}px`;
    if (mainAreaContent.getBoundingClientRect().bottom < scroll) {
        mainChoise.classList.add("shift-choise");
    }
}

const coordShiftScreen = {
	x: 0,
	y: 0,
}; 

function dodgeMountain(event) {
    if (event.target.closest(".main-forest")) {
        Math.abs(coordShiftScreen.x) == 10 ? (coordShiftScreen.x = 0) : coordShiftScreen.x;
        Math.abs(coordShiftScreen.y) == 10 ? (coordShiftScreen.y = 0) : coordShiftScreen.y;
        let widthWindow = mainForest.offsetWidth / 2;
        let heightWindow = mainForest.offsetHeight;
        let elem = event.pageY - (heightWindow - mainForest.getBoundingClientRect().top);

        event.pageX < widthWindow ? (coordShiftScreen.x += 10) : (coordShiftScreen.x -= 10);
        elem < heightWindow / 2 ? (coordShiftScreen.y += 10) : (coordShiftScreen.y -= 10);
    }
    forestImage.style.transform = `translate3d(${coordShiftScreen.x}px, ${coordShiftScreen.y}px, 0)`;
}


