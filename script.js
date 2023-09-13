import { handleDateClick } from "./HandleDateClick.js";
import {createCalendar} from "./CreateCalendar.js";

document.addEventListener('DOMContentLoaded', function() 
{
  var calendarEl1 = document.getElementById('one-calendar');
  var calendarEl2 = document.getElementById('two-calendar');
  var calendarEl3 = document.getElementById('tree-calendar');
  var calendarEl4 = document.getElementById('four-calendar');
  var calendarEl5 = document.getElementById('five-calendar');
  var calendarEl6 = document.getElementById('six-calendar');


  var calendar1 = createCalendar(calendarEl1, 'Sala 1', FullCalendar);
  var calendar2 = createCalendar(calendarEl2, 'Sala 2', FullCalendar);
  var calendar3 = createCalendar(calendarEl3, 'Sala 3', FullCalendar);
  var calendar4 = createCalendar(calendarEl4, 'Sala 4', FullCalendar);
  var calendar5 = createCalendar(calendarEl5, 'Sala 5', FullCalendar);
  var calendar6 = createCalendar(calendarEl6, 'Sala 6', FullCalendar);

  calendar1.render();
  calendar2.render();
  calendar3.render();
  calendar4.render();
  calendar5.render();
  calendar6.render();

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