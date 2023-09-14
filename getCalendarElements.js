// const calendarEls = document.getElementById('div-container-main');

export function getCalendarElements() {
  const calendarWrappers = document.querySelectorAll('.calendar-wrapper')
  const calendarNames = ['one', 'two', 'tree', 'four', 'five', 'six'];
  const calendarElements = [];

  calendarWrappers.forEach(function(wrapper) {
    for(let i = 0; i < calendarNames.length; i += 1) {
      const id = `${calendarNames[i]}-calendar`;
      const calendarElement = wrapper.querySelector(`#${id}`);
  
      if (calendarElement) {
        calendarElement.id = id;
        calendarElements.push(calendarElement)
        // console.log(calendarElement)

      }
    }
  });
  return calendarElements;
}
