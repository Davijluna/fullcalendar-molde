// const json = 'pessoa.json'
// try {
//   if(json) {
//     console.log(json)
//   }
 
// } catch (e) {
//     console.log('Não existo !!!')
// }

fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementos(json));

function carregaElementos(json) {
  for(let pessoa of json) {
    console.log(pessoa.title);
  }
}

