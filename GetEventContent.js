export   function getEventContent(eventInfo) {
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