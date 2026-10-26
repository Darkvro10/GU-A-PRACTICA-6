import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tarifaKwh = 0.18;
function calcularCostoConsumo(kwh) {
    return kwh * tarifaKwh;
}

function calcularTasaServicios(subtotal) {
    return subtotal * 0.08;
}

function calcularTotalFactura(subtotal, tasa) {
    return subtotal + tasa;
}

function imprimirFacturaLuz(kwh, subtotal, tasa, total) {
    console.log("\n================================");
    console.log("      FACTURA DE ENERGIA");
    console.log("================================");
    console.log("Consumo: " + kwh + " kWh");
    console.log("Costo base: $" + subtotal.toFixed(2));
    console.log("Tasa de servicios (8%): $" + tasa.toFixed(2));
    console.log("Total a pagar: $" + total.toFixed(2));
    console.log("================================");
}

rl.question("Ingrese los kWh consumidos: ", function(entrada) {
    const kwh = parseFloat(entrada);

    if (isNaN(kwh) || kwh < 0) {
        console.log("Error: ingrese un consumo valido.");
    } else {
        const subtotal = calcularCostoConsumo(kwh);
        const tasa = calcularTasaServicios(subtotal);
        const total = calcularTotalFactura(subtotal, tasa);

        imprimirFacturaLuz(kwh, subtotal, tasa, total);
    }

    rl.close();
});