var valorProduto = document.querySelector('#valorProduto');
var total = document.querySelector('#total');

function totalPagar() {

    let valor = Number(valorProduto.value);
    let valorFinal;

    if (valor >= 1000) {

        valorFinal = valor - (valor * 15 / 100);
        total.innerHTML = `${valorFinal.toFixed(2)}`;

    } else if (valor >= 500) {

        valorFinal = valor - (valor * 5 / 100);
        total.innerHTML = `${valorFinal.toFixed(2)}`;

    } else {

        total.innerHTML = `${valor.toFixed(2)} || Boas Compras !!`;
    }
}