fetch('https://mindicador.cl/api')
    .then(response => response.json())
    .then(dailyIndicators => {
        document.getElementById("UF").textContent = `El valor actual de la UF es $CLP ${dailyIndicators.uf.valor}`;
        document.getElementById("DolarO").textContent = `El valor actual del Dólar observado es $CLP ${dailyIndicators.dolar.valor}`;
        document.getElementById("DolarA").textContent = `El valor actual del Dólar acuerdo es $CLP ${dailyIndicators.dolar_intercambio.valor}`;
        document.getElementById("Euro").textContent = `El valor actual del Euro es $CLP ${dailyIndicators.euro.valor}`;
        document.getElementById("IPC").textContent = `El valor actual del IPC es ${dailyIndicators.ipc.valor}%`;
        document.getElementById("UTM").textContent = `El valor actual de la UTM es $CLP ${dailyIndicators.utm.valor}`;
        document.getElementById("IVP").textContent = `El valor actual del IVP es $CLP ${dailyIndicators.ivp.valor}`;
        document.getElementById("Imacec").textContent = `El valor actual del Imacec es ${dailyIndicators.imacec.valor}%`;
    })
    .catch(error => console.error('Error al obtener los datos:', error));