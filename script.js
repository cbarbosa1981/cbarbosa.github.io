// Função para calcular o custo
function calculate() {
    var kwhMonth = parseFloat(document.getElementById('kwh-month').value);
    var kwhCost = parseFloat(document.getElementById('kwh-cost').value);
    var hoursOn = parseFloat(document.getElementById('hours-on').value);

    if (isNaN(kwhMonth) || isNaN(kwhCost) || isNaN(hoursOn)) {
        document.getElementById('result').innerHTML = 'Por favor, insira valores válidos.';
        return;
    }

    var totalCost = kwhMonth * kwhCost * hoursOn;

    document.getElementById('result').innerHTML = 'O ar condicionado gasta R$' + totalCost.toFixed(2) + ' por mês.';
}

// Adicionar tratamento de evento para o botão "Calcular"
var calculateButton = document.querySelector('.btn');
calculateButton.addEventListener('click', calculate);

// Adicionar tratamento de evento para a tecla "Enter" nos campos de entrada
var inputFields = document.querySelectorAll('.input-group input');
inputFields.forEach(function (input) {
    input.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            calculate();
        }
    });
});
