"use strict";

function eventHandler() {
	// JSCCommon.CustomInputFile(); 
	var x = window.location.host;
	var screenName;
	screenName = 'main.jpg';

	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", "<div class=\"pixel-perfect\" style=\"background-image: url(screen/".concat(screenName, ");\"></div>"));
	}

	$('input[name="daterange"]').daterangepicker({
		opens: 'left',
		"locale": {
			"format": "DD.MM.YYYY",
			"separator": " - ",
			"applyLabel": "Применить",
			"cancelLabel": "Сбросить",
			"fromLabel": "От",
			"toLabel": "До",
			"customRangeLabel": "Произвольный",
			"daysOfWeek": ["Вс.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."],
			"monthNames": ["Январь", // заменяем на Январь
			"Февраль", // Февраль и т д
			"Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
			"firstDay": 1
		}
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
} // window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }