//  1 - get fetch
fetch('http://difiores-001-site3.etempurl.com/api/Agenda')
  .then(resposta => resposta.json())
  .then(json => {
    console.log(json)
  })
  .catch((error) => {
    console.log(error)
  })



// function carregaElementos(json) {
//   // for(let pessoa of json) {
//   //   console.log(pessoa.aula);
//   // }
//   console.log(json);
// }

