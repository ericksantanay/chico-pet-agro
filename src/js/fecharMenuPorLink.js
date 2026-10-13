const linksCelular = document.querySelectorAll('.links-versao-mobile')

const menuCelular = document.getElementById("links-de-navegacao-celular")

linksCelular.forEach(link => {

    link.addEventListener('click', (evento) => {
        evento.preventDefault();

        const destinoId = link.getAttribute('href');
        const elementoDestino = document.querySelector(destinoId);

        if (elementoDestino) {
            // 3. Força a rolagem suave nativa até a seção primeiro
            elementoDestino.scrollIntoView({ behavior: 'smooth' });
            
            // 4. Aguarda 400 milissegundos (o tempo da rolagem acontecer) e aí sim esconde o menu roxo
            setTimeout(() => {
                menuCelular.style.display = 'none';
            }, 200);
        }
    })

})