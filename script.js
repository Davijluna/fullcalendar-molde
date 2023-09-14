import { handleDateClick } from "./handleDateClick.js";
import {createCalendar} from "./createCalendar.js";
import { getCalendarElements } from "./getCalendarElements.js";

document.addEventListener('DOMContentLoaded', function() 
{
  var calendarElements = getCalendarElements()
  if (typeof FullCalendar !== 'undefined') {

    for (let i = 0; i < calendarElements.length; i++) {
      if (calendarElements[i]) {
        let salaName = `Sala ${i + 1}`;
        createAndRenderCalendar(calendarElements[i], salaName);
      }
    }
  } else {
    console.error('A biblioteca FullCalendar não está definida.');
  }

  function createAndRenderCalendar(calendarElement, salaName) {
    let calendar = createCalendar(calendarElement, salaName, FullCalendar);
    calendar.render();
    calendar.setOption('dateClick', function(info) {
      handleDateClick(info, salaName);
    });
  }
});