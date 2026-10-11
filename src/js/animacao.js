
const elementos = document.querySelectorAll('.animar');

console.log('Elementos encontrados:', elementos.length);

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        const elemento = entrada.target;

        if (entrada.isIntersecting) {
            elemento.classList.add('ativo');
        } else {
            elemento.classList.remove('ativo');
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach(elemento => {
    observer.observe(elemento);
});