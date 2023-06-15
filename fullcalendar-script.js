document.addEventListener('DOMContentLoaded', function() {
  var srcCalendarEl = document.getElementById('source-calendar');
  var destCalendarEl = document.getElementById('destination-calendar');

  var srcCalendar = new FullCalendar.Calendar(srcCalendarEl, {
    editable: true,
    initialDate: '2023-01-12',
    events: [
      {
        title: 'event1',
        start: '2023-01-11T10:00:00',
        end: '2023-01-11T16:00:00'
      },
      {
        title: 'event2',
        start: '2023-01-13T10:00:00',
        end: '2023-01-13T16:00:00'
      }
    ],
    eventLeave: function(info) {
      console.log('event left!', info.event);
    }
  });

  var destCalendar = new FullCalendar.Calendar(destCalendarEl, {
    initialDate: '2023-01-12',
    editable: true,
    eventReceive: function(info) {
      console.log('event received!', info.event);
    }
  });

  srcCalendar.render();
  destCalendar.render();
});