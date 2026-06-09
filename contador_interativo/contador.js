let contador = 0;

const numeroElemento = document.getElementById('numero');
const btnIncrementar = document.getElementById('btn-incrementar');
const btnDecrementar = document.getElementById('btn-decrementar');
const btnZerar = document.getElementById('btn-zerar');

function atualizarDisplay() {
    numeroElemento.textContent = contador;

    if (contador > 0) {
        numeroElemento.className = 'positivo';
    } else if (contador < 0) {
        numeroElemento.className = 'negativo';
    } else {
        numeroElemento.className = 'zero';
    }
}

btnIncrementar.addEventListener('click', () => {
    contador++;
    atualizarDisplay();
});

btnDecrementar.addEventListener('click', () => {
    contador--;
    atualizarDisplay();
});

btnZerar.addEventListener('click', () => {
    contador = 0;
    atualizarDisplay();
});