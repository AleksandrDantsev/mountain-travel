"use strict";

const mainBlock = document.querySelector("main");
const popUpReserve = document.querySelector(".pop-up");
const htmlDocument = document.documentElement;
const forestScreen = document.querySelector(".main-forest");

mainBlock.addEventListener("click", openMenu);

function openMenu(event) {
    if (event.target.closest(".choise-line")) {
        popUpReserve.classList.toggle("active");
        popUpReserve.scrollIntoView(true);

        if (window.innerWidth < 520) {
            popUpReserve.scrollIntoView(false);
            blockHiden(true);
        }
        if (!popUpReserve.classList.contains("active")) {
            blockHiden(false);
        }
    }
    if (event.target.closest(".pop-up__cross")) {
        popUpReserve.classList.remove("active");
        blockHiden(false);
    }
    if (
        event.target.closest("main") &&
        !event.target.closest(".pop-up") &&
        !event.target.closest(".choise-line")
    ) {
        popUpReserve.classList.remove("active");
        blockHiden(false);
    }
}

function blockHiden(bool) {
    if (bool) htmlDocument.style.overflowY = "hidden";
    if (!bool) htmlDocument.style.overflowY = "unset";
}
