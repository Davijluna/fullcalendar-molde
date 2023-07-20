//  1 - get fetch
fetch('test.json')
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

