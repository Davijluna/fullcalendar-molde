const calendarEls = document.getElementById('div-container-main');
const calendarWrappers = document.querySelectorAll('.calendar-wrapper')
const calendarNames = ['one', 'two', 'tree', 'four', 'five', 'six'];

calendarWrappers.forEach(function(wrapper) {
  let label = wrapper.querySelector('.calendar-label').textContent;
  console.log(label);
})