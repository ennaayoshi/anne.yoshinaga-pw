var numero1 = document.querySelector('#numero1');
var numero2 = document.querySelector('#numero2');
var resultado = document.querySelector('#resultado');

function somar() {
    resultado.innerHTML = Number(numero1.value) + Number(numero2.value);
}

function subtrair() {
    resultado.innerHTML = Number(numero1.value) - Number(numero2.value);
}

function multiplicar() {
    resultado.innerHTML = Number(numero1.value) * Number(numero2.value);
}

function dividir() {
    if (Number(numero2.value) === 0) {
        resultado.innerHTML = 'Erro: Divisão por Zero.'
    }
    else {
        resultado.innerHTML = Number(numero1.value) / Number(numero2.value);
    }
}