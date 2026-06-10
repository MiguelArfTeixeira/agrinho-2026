// Lista com as URLs correspondentes a cada botão (na ordem correta)
        const urls = [
            "pagina 1.html",
            "https://www.ibm.com/br-pt/think/topics/green-technology",
            "https://videira.ifc.edu.br/zeco/2015/11/03/20-dicas-para-preservar-o-meio-ambiente/",
            "https://wikipedia.org",
            "https://reddit.com",
            "https://stackoverflow.com",
            "https://linkedin.com",
            "https://instagram.com"
        ];

        // O laço FOR vai de 1 até 8 para bater exatamente com os IDs (btn-1 até btn-8)
        for (let i = 1; i <= 8; i++) {
            
            // Seleciona o botão dinamicamente pelo ID usando template string
            let botao = document.getElementById(`btn-${i}`);
            // Adiciona o evento de clique ao botão selecionado
            botao.addEventListener('click', function() {
                // Abre a URL correspondente (i - 1 ajusta a contagem para começar do índice 0 do array)
                window.open(urls[i - 1], '_blank');
            });
        }
  
