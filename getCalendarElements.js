const calendarEls = document.getElementById('div-container-main');
const calendarWrappers = document.querySelectorAll('.calendar-wrapper')
const calendarNames = ['one', 'two', 'tree', 'four', 'five', 'six'];

calendarWrappers.forEach(function(wrapper) {
  for(let i = 0; i < calendarNames.length; i += 1) {
    const id = `${calendarNames[i]}-calendar`;
    const calendarElement = wrapper.querySelector(`#${id}`);
    
    if (calendarElement) {
      let label = calendarElement.innerText;
      return label
      // console.log(label)
    }
  }
})

export {label}