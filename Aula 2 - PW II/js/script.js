// Estrutura de Repetição While
var x = 0;
var numero = 0;

while (x < 5) {
    numero = x + numero;

// Incrementador
    x++
}

console.log("Testando Repetição" + x) ;


// Criando uma Array que passe por todos elementos
var arr = ['Teste1', 'Teste2', 'Teste3', 'a'];

var y = 0; 

// Passando por todos os elementos
while (y <= 3) {
    console.log(arr[y]);
    y++
}

// Passando por todas as palavras
var palavra = "ANNE"; 
var i = 0;

// Passando por todos os elementos
while (i < 4) {
    console.log(palavra[i]);
    i++
}