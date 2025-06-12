function convertCurrency() {
    const amount = document.getElementById("amount").value;
    if (!amount || amount <= 0) {
        document.getElementById("usdResult").textContent = "ingresa un monto válido.";
        return;
    }

    fetch('https://mindicador.cl/api')
        .then(response => response.json())
        .then(dailyIndicators => {
            const usdValue = (amount / dailyIndicators.dolar.valor).toFixed(2);
            const utmValue = (amount / dailyIndicators.utm.valor).toFixed(2);
            const ufValue = (amount / dailyIndicators.uf.valor).toFixed(2);

            document.getElementById("usdResult").textContent = ` Dólares: $${usdValue} USD`;
            document.getElementById("utmResult").textContent = ` UTM: ${utmValue}`;
            document.getElementById("ufResult").textContent = ` UF: ${ufValue}`;
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}