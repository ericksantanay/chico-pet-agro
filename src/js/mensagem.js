
const botoesWhatsApp = document.querySelectorAll(".btn-whatsapp");

const numeroWhatsApp = "5519971278950";

botoesWhatsApp.forEach((botao) => {
    const card = botao.closest(".cards-produtos");

    const tituloProduto = card.querySelector("h2").textContent.trim();

    const mensagem = `Olá, tudo bem? Gostaria de saber mais informações sobre o produto ${tituloProduto}.

        Poderiam me informar o preço e a disponibilidade desse produto?

        Aguardo o retorno. Obrigado!`;

    const mensagemCodificada = encodeURIComponent(mensagem);

    botao.href = `https://api.whatsapp.com/send/?phone=${numeroWhatsApp}&text=${mensagemCodificada}`;

    botao.target = "_blank";
    botao.rel = "noopener noreferrer";
});
