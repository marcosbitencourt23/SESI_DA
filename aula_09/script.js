nst form = document.getElementById("formAluno");
const listaAlunos = document.getElementById("listaAlunos");
const mensagemVazia = document.getElementById("mensagemVazia");


let alunos = JSON.parse(localStorage.getItem("alunos")) || [];


form.addEventListener("submit", function (event) {
event.preventDefault();

const nome = document.getElementById("nome").value.trim();
const email = document.getElementById("email").value.trim();
const nascimento = document.getElementById("nascimento").value;
const curso = document.getElementById("curso").value;


const aluno = {
    id: Date.now(),
    nome: nome,
    email: email,
    nascimento: nascimento,
    curso: curso
};

alunos.push(aluno);


salvarAlunos();

atualizarTabela();

form.reset();


});


function salvarAlunos() {
localStorage.setItem("alunos", JSON.stringify(alunos));
}


function atualizarTabela() {


listaAlunos.innerHTML = "";


if (alunos.length === 0) {
    mensagemVazia.style.display = "block";
    return;
}


mensagemVazia.style.display = "none";


alunos.forEach(function (aluno) {

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${aluno.nome}</td>
        <td>${aluno.email}</td>
        <td>${formatarData(aluno.nascimento)}</td>
        <td>${aluno.curso}</td>
        <td>
            <button
                class="btn-excluir"
                onclick="excluirAluno(${aluno.id})"
            >
                Excluir
            </button>
        </td>
    `;

    listaAlunos.appendChild(linha);
});


}


function excluirAluno(id) {

alunos = alunos.filter(function (aluno) {
    return aluno.id !== id;
});


salvarAlunos();


atualizarTabela();


}


function formatarData(data) {

if (!data) {
    return "";
}

const partes = data.split("-");

return `${partes[2]}/${partes[1]}/${partes[0]}`;


}

atualizarTabela();