"use strict";

const runLine = document.querySelector('.footer__run-line').children;

(function visibleRunLine() {
	let i = 0;
	return (function visibleRunLineInside() {
		if (i >= 1) {
		runLine[i - 1].style.display = 'none';
		swingLine(runLine[i - 1], +15);
	}
	if (i == runLine.length) i = 0;
	runLine[i].style.display = 'block';

	if (window.innerWidth < runLine[i].offsetWidth) {
		let widthRunLine = runLine[i].offsetWidth;
		swingLine(runLine[i], widthRunLine);
	}
	i++; 
	setTimeout(visibleRunLineInside, 20000);
	})()
})();


function swingLine(elem, pos) {
	elem.style.transform = `translateX(${-pos}px)`;
}



