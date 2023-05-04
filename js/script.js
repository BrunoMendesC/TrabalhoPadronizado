let trabalhos = [];

function salvarTrabalho() {
event.preventDefault();
let titulo = document.getElementById("titulo").value;
trabalhos.push({titulo: titulo});
exibirTrabalhos();
document.getElementById("titulo").value = "";
}

function exibirTrabalhos() {
let lista = document.getElementById("trabalhos-lista");
lista.innerHTML = "";
for (let i = 0; i < trabalhos.length; i++) {
let trabalho = trabalhos[i];
let li = document.createElement("li");
let h2 = document.createElement("h2");
h2.textContent = trabalho.titulo;
li.appendChild(h2);
lista.appendChild(li);
}
}