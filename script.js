import { getEventContent } from "./GetEventContent.js";
// import { createCalendar } from './createCalendar';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl1 = document.getElementById('source-calendar');
  var calendarEl2 = document.getElementById('destination-calendar');
  var calendarEl3 = document.getElementById('tree-calendar');

// variável com a função para setar.
  var uniqueEvents = new Set();

  // const selectedDayElement = document.getElementById('selectedDay'); //////////

  function createCalendar(calendarEl, place, FullCalendar) {
    var dataAtual = new Date();
    var ano = dataAtual.getFullYear();
    var mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2);
    var dia = ("0" + dataAtual.getDate()).slice(-2);
    var dataFormatada = ano + "-" + mes + "-" + dia;

      
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

  // Função para lidar com o clique em uma data
  function handleDateClick(info, place) {
    var selectedDate = moment(info.date).format('YYYY-MM-DD'); // Formate a data selecionada usando moment.js
    var isWeeklyOrMonthly = info.view.type !== 'dayGridDay';

    // Cria o objeto JSON com as informações necessárias
    var jsonData = {
      place: place,
      selectedDate: selectedDate,
      isWeeklyOrMonthly: isWeeklyOrMonthly
    };

    // Converte o objeto JSON em uma string para passar como parâmetro na URL
    var jsonDataString = encodeURIComponent(JSON.stringify(jsonData));

    // Redireciona para a outra página com as informações no parâmetro "data"
    window.location.href = '/indexTest.html?data=' + jsonDataString;
  }
});