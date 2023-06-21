document.addEventListener('DOMContentLoaded', function() {
  var srcCalendarEl = document.getElementById('source-calendar');
  var destCalendarEl = document.getElementById('destination-calendar');
  var novoCalendarEl = document.getElementById('tree-calendar')

  function getEventContent(eventInfo) {
    var event = eventInfo.event;
    var discipline = event.extendedProps.discipline || '';
    var mentor = event.extendedProps.mentor || '';
    var student = event.extendedProps.student || '';

    var content = '<div class="fc-event-main">' + discipline + '</div>';
    content += '<div class="fc-event-sub">' + mentor + ' - ' + student + '</div>';

    return { html: content };
  }

  var srcCalendar = new FullCalendar.Calendar(srcCalendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    locales: 'pt-br',
    initialDate: '2023-06-12',
    editable: true,
    eventContent: getEventContent,
    eventSources: [
      {
        url:'http://difiores-001-site3.etempurl.com/api/Agenda',
        success: function(data) {
          var events = data.filter(function(event) {
            return event.place === 'Sala 1';
          });

          data.forEach(function(event) {
            event.beginEvent = event.start;
            event.endEvent = event.end;
            delete event.start;
            delete event.end;
          });
          srcCalendar.addEventSource(events)
        }
      }
    ],
    eventLeave: function(info) {
      console.log('event left!', info.event);
    },
  });

  var destCalendar = new FullCalendar.Calendar(destCalendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    locales: 'pt-br',
    initialDate: '2023-06-12',
    editable: true,
    eventContent: getEventContent,
    eventSources: [
      {
        url:'http://difiores-001-site3.etempurl.com/api/Agenda',
        success: function(data) {
          var events = data.filter(function(event) {
            return event.place === 'Sala 2';
          });
          data.forEach(function(event) {
            event.beginEvent = event.start;
            event.endEvent = event.end;
            delete event.start;
            delete event.end;
          });

          destCalendar.addEventSource(events)
        }
      }
    ],
    eventReceive: function(info) {
      console.log('event received!', info.event);
    }
  });

  var novoCalendar = new FullCalendar.Calendar(novoCalendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    locales: 'pt-br',
    initialDate: '2023-06-12',
    editable: true,
    eventContent: getEventContent,
    eventSources: [
      {
        url:'http://difiores-001-site3.etempurl.com/api/Agenda',
        success: function(data) {
          var events = data.filter(function(event) {
            return event.place === 'Sala 3';
          });

          data.forEach(function(event) {
            event.beginEvent = event.start;
            event.endEvent = event.end;
            delete event.start;
            delete event.end;
          });

          novoCalendar.addEventSource(events)
        }
      }
    ],
    eventLeave: function(info) {
      console.log('event left!', info.event);
    },
  });

  srcCalendar.render();
  destCalendar.render();
  novoCalendar.render();
});