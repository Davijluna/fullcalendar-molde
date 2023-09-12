export function handleDateClick(info, place) {
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