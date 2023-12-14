function calcularICMS() {
    // Obtenha o valor inserido pelo usuário
    var precoCusto = parseFloat(document.getElementById("precoCusto").value);

    // Assuma uma taxa fixa de ICMS (em decimal)
    var taxaICMS = 0.18; // Exemplo: 18%

    // Calcule o valor do ICMS
    var valorICMS = precoCusto * taxaICMS;

    // Calcule o preço final com ICMS
    var precoFinal = precoCusto + valorICMS;

    // Exiba o resultado
    document.getElementById("resultado").innerText = "Preço Final (com ICMS): R$ " + precoFinal.toFixed(2);
}