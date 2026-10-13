
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