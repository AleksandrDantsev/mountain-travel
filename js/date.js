"use strict";

const dateAdventure = document.querySelector(".date-adv");

let date = new Date();

let currentDay = date.getDate();
let beforeRegistrationDay = currentDay + 6;
let afterRegistrationDay = currentDay + 19;
let dayOne = 14;
let dayPlus = currentDay + dayOne;

let currentMounth = date.getMonth();

const arrayMounth = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
];


function incMounth(day) {
    let inc = day > 31 ? currentMounth + 1 : currentMounth;
    return inc;
}

const mounthIncr = incMounth(dayPlus);
const daysMounthInc = incMounth(beforeRegistrationDay);
const mounthIncSecondField = incMounth(afterRegistrationDay);

dayPlus > 31 ? (dayPlus = currentDay + dayOne - 31) : dayPlus;
beforeRegistrationDay > 31 ? (beforeRegistrationDay = beforeRegistrationDay + 6 - 31) : beforeRegistrationDay;
afterRegistrationDay > 31 ? (afterRegistrationDay = afterRegistrationDay + 6 - 31) : afterRegistrationDay;

dateAdventure[1].innerHTML = `(${currentDay} ${arrayMounth[currentMounth]} - ${dayPlus} ${arrayMounth[mounthIncr]})`;
dateAdventure[2].innerHTML = `(${beforeRegistrationDay} ${arrayMounth[daysMounthInc]} - ${afterRegistrationDay} ${arrayMounth[mounthIncSecondField]})`;

const titleSite = document.querySelector(".name-site__title");

titleSite.classList.add("opacity-title");
