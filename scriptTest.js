axios('http://difiores-001-site3.etempurl.com/Agenda')
.then(resposta => carregaElementoNaPagina(resposta.data))

 const carregaElementoNaPagina = (json) => {
  console.log(json)
  const table = document.createElement('table');


  for (let pessoa of json) {

    const tr = document.createElement('tr');
   


  // Depois disso inserimos essas tds como filhas de tr
    let td = document.createElement('td');
    td.innerHTML = pessoa.aluno;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.professor;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.disciplina;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.data;
    tr.appendChild(td);

   

    table.appendChild(tr)

    const resultado = document.querySelector('.resultado')

    resultado.appendChild(table)

    console.log(pessoa.nome)
  }
 }

