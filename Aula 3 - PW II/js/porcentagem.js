var valorP = document.querySelector('#valorP');
var percentual = document.querySelector('#percentual');
var resultadoD = document.querySelector('#resultadoD');

function desconto() {
    resultadoD.innerHTML = Number(valorP.value) - ((Number(valorP.value) * Number(percentual.value)) / 100);
}

function lucro() {
    resultadoD.innerHTML = Number(valorP.value) + ((Number(valorP.value) * Number(percentual.value)) / 100);
}