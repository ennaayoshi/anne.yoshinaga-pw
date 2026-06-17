function atualizarTotal(linha) {
  let quantidade = parseInt(linha.querySelector(".contador").textContent);
  let precoTexto = linha.querySelector(".preco").textContent
    .replace("R$ ", "")
    .replace(".", "")
    .replace(",", ".");
  let preco = parseFloat(precoTexto);
  let total = quantidade * preco;
  linha.querySelector(".total").textContent = "R$ " + total.toFixed(2).replace(".", ",");
}

function atualizarSubtotalGeral() {
  let somaTotal = 0;
  
  document.querySelectorAll(".total").forEach(function(elementoTotal) {
    let texto = elementoTotal.textContent
      .replace("R$ ", "")
      .replace(/\./g, "")
      .replace(",", ".");
    
    somaTotal += parseFloat(texto) || 0;
  });
  

  document.getElementById("subtotal").textContent = "R$ " + somaTotal.toFixed(2).replace(".", ",");
}

document.querySelectorAll(".btn-mais").forEach(function(btn) {
  btn.addEventListener("click", function() {
    let span = btn.previousElementSibling;
    span.textContent = parseInt(span.textContent) + 1;
    atualizarTotal(btn.closest("tr"));
    atualizarSubtotalGeral(); 
  });
});

document.querySelectorAll(".btn-menos").forEach(function(btn) {
  btn.addEventListener("click", function() {
    let span = btn.nextElementSibling;
    if (parseInt(span.textContent) > 0) {
      span.textContent = parseInt(span.textContent) - 1;
      atualizarTotal(btn.closest("tr"));
      atualizarSubtotalGeral(); 
    }
  });
});