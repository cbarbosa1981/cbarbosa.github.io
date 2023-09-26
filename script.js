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
