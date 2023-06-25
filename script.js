document.addEventListener('DOMContentLoaded', function() {
  var calendarEl1 = document.getElementById('source-calendar');
  var calendarEl2 = document.getElementById('destination-calendar');
  var calendarEl3 = document.getElementById('tree-calendar');
//  criamos uma variável com a função para setar.
  var uniqueEvents = new Set();

  function getEventContent(eventInfo) {
    var event = eventInfo.event;
    var discipline = event.extendedProps.discipline || '';
    var mentor = event.extendedProps.mentor || '';
    var student = event.extendedProps.student || '';
    var startTime = event.extendedProps.beginEvent || '';
    var endTime = event.extendedProps.endEvent || '';

    var content = '<div class="fc-event-main">' + discipline + '  -  ' + ' ' + startTime + ' - ' + endTime + '</div>';
    content += '<div class="fc-event-sub">' + mentor + ' - ' + student + '</div>';

    return { html: content };
  }

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
              console.log(event.place);
              event.beginEvent = event.start;
              event.endEvent = event.end;
              delete event.start;
              delete event.end;
            });

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
    });

    return calendar;
  }

  var calendar1 = createCalendar(calendarEl1, 'Sala 1', FullCalendar);
  var calendar2 = createCalendar(calendarEl2, 'Sala 2', FullCalendar);
  var calendar3 = createCalendar(calendarEl3, 'Sala 3', FullCalendar);


  calendar1.render();
  calendar2.render();
  calendar3.render();
});