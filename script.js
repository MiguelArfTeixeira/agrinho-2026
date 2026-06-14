// Lista com as URLs correspondentes a cada botão (na ordem correta)
const urls = [
    "pagina 1.html",
    "pagina 2.html",
    "pagina 3.html",
    "pagina 4.html",
    "pagina 5.html",
    "pagina 6.html",
];

// O laço FOR vai de 1 até 6 para bater exatamente com os IDs (btn-1 até btn-8)
for (let i = 1; i <= 6; i++) {

    // Seleciona o botão dinamicamente pelo ID usando template string
    let botao = document.getElementById(`btn-${i}`);
    // Adiciona o evento de clique ao botão selecionado
    botao.addEventListener('click', function () {
        // Abre a URL correspondente (i - 1 ajusta a contagem para começar do índice 0 do array)
        window.open(urls[i - 1], '_blank');
    });
}
let tamanhoFonte = 100;

function aumentarFonte() {
    if (tamanhoFonte < 150) {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}

function diminuirFonte() {
    if (tamanhoFonte > 70) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}

