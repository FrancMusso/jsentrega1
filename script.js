document.addEventListener("DOMContentLoaded", function () {
    const tipoSeguro = document.getElementById("tipo-seguro");
    const edad = document.getElementById("edad");
    const cobertura = document.getElementById("cobertura");
    const calcularBtn = document.getElementById("calcular");
    const cotizacionElement = document.getElementById("cotizacion");

    calcularBtn.addEventListener("click", function () {
        const tipo = tipoSeguro.value;
        const age = parseInt(edad.value);
        const coverage = parseInt(cobertura.value);
        let cotizacion = 0;

        // Lógica de cálculo de cotización (simulada)
        if (tipo === "auto") {
            cotizacion = 100 + age * 10 + coverage * 0.5;
        } else if (tipo === "hogar") {
            cotizacion = 50 + age * 5 + coverage * 0.3;
        }

        cotizacionElement.textContent = `Cotización: $${cotizacion}`
    });
});