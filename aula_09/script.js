


const form = document.getElementById('formAluno')
const tabela = document.getElementById('tabelaalunos').getElementsByTagName("tbody")[0];


function carregarAlunos() {
    tabela.innerHTML = "";
    const alunos = JSON.parse(localStorage.getItem('alunos')) || [];

    alunos.forEach(aluno => {
        const novaLinha = tabela.insertRow();
        novaLinha.innerHTML = `<td>${aluno.nome}</td>
        <td>${aluno.email}</td>
        <td>${aluno.curso}</td>
        <td>${aluno.nascimento}</td>
        `;
    });
}


form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const curso = document.getElementById('curso').value;
    const nascimento = document.getElementById('nascimento').value;

    const novoAluno = { nome, email, curso, nascimento};


    const alunos = JSON.parse(localStorage.getItem('alunos')) || [];

    alunos.push(novoAluno);

    localStorage.setItem('alunos', JSON.stringify(alunos));


    form.reset();


    carregarAlunos();
});


carregarAlunos();
