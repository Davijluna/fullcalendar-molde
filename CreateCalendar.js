// OK
import { getEventContent } from "./GetEventContent.js";

export function createCalendar(calendarEl, place, FullCalendar) 
{
  var dataAtual = new Date();
  var ano = dataAtual.getFullYear();
  var mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2);
  var dia = ("0" + dataAtual.getDate()).slice(-2);
  var dataFormatada = ano + "-" + mes + "-" + dia;

  var uniqueEvents = new Set();

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,dayGridDay,listMonth'
    },
    initialView: 'dayGridDay',
    locale: 'pt-br',
    initialDate: dataFormatada,
    editable: false,
    eventContent: getEventContent,
    eventSources: [
      {
        url: 'http://difiores-001-site3.etempurl.com/api/Agenda',
        
        success: function(data) {
          var events = data.filter(function(event) {
            return event.place === place;
          });
            events.forEach(event => {
            event.beginEvent = event.start;
            event.endEvent = event.end;
            delete event.start;
            delete event.end;
          });
           // buscamos o valor que vem do JSON em event 
           // guardamos os ids em uma váriavel e usamos o método has para verificar existência do id no json
           // caso não exista ele será adicionado 
           // e em seguida chamamos a o método addEventSource para montar o calendário na tela. 
            events.forEach(function(event) {
            var eventId = event.id;
            if (!uniqueEvents.has(eventId)) {
              uniqueEvents.add(eventId);
              calendar.addEventSource(event);
        }
        });
        }
      }
    ],
    eventLeave: function(info) {
      console.log('event left!', info.event);
    },
    dateClick: function(info) {
      setSelectedDay(info.date);
    }
  });

  return calendar;
}