import { handleDateClick } from "./HandleDateClick.js";
import {createCalendar} from "./CreateCalendar.js";

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl1 = document.getElementById('source-calendar');
  var calendarEl2 = document.getElementById('destination-calendar');
  var calendarEl3 = document.getElementById('tree-calendar');

// variável com a função para setar.
  

  // const selectedDayElement = document.getElementById('selectedDay'); //////////

  var calendar1 = createCalendar(calendarEl1, 'Sala 1', FullCalendar);
  var calendar2 = createCalendar(calendarEl2, 'Sala 2', FullCalendar);
  var calendar3 = createCalendar(calendarEl3, 'Sala 3', FullCalendar);

  calendar1.render();
  calendar2.render();
  calendar3.render();

   // Evento de clique em uma data do calendário
   calendar1.setOption('dateClick', function(info) {
    handleDateClick(info, 'Sala 1');
  });

  calendar2.setOption('dateClick', function(info) {
    handleDateClick(info, 'Sala 2');
  });

  calendar3.setOption('dateClick', function(info) {
    handleDateClick(info, 'Sala 3');
  });
});