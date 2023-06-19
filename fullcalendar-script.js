document.addEventListener('DOMContentLoaded', function() {
  var srcCalendarEl = document.getElementById('source-calendar');
  var destCalendarEl = document.getElementById('destination-calendar');

  var srcCalendar = new FullCalendar.Calendar(srcCalendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    locales: 'pt-br',
    initialDate: '2023-01-12',
    editable: true,
    eventSources: [
      {
        url:'http://difiores-001-site3.etempurl.com/api/Agenda',
      }
    ],
    eventLeave: function(info) {
      console.log('event left!', info.event);
    }
  });

  var destCalendar = new FullCalendar.Calendar(destCalendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    locales: 'pt-br',
    initialDate: '2023-01-12',
    editable: true,
    eventSources: [
      {
        url:'/pessoas.json',
      }
    ],
    eventReceive: function(info) {
      console.log('event received!', info.event);
    }
  });

  srcCalendar.render();
  destCalendar.render();
});