
const elementos = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("ativo");
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {
    observer.observe(elemento);
});




// ANIMAÇÃO CARDS

const cards = document.querySelectorAll(".cards-produtos");

const observerCard = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const card = entry.target;

    if (entry.isIntersecting) {
      // Card entrou na área visível
      const index = Array.from(cards).indexOf(card);

      card.style.transitionDelay = `${index * 120}ms`;
      card.classList.add("visivel");
    } else {
      // Só prepara para animar novamente
      // quando o card sair completamente da tela
      card.style.transitionDelay = "0ms";
      card.classList.remove("visivel");
    }
  });
}, {
  threshold: 0
});

cards.forEach((card) => {
  observerCard.observe(card);
});