import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const tarifaKm = 2.50;
const tarifaKg = 0.15;
const porcentajeSeguro = 0.05;

function calcularCostoBase(pesoKg, distanciaKm) {
    return (pesoKg*tarifaKg) + (distanciaKm*tarifaKm);
}

function calcularSeguroEnvio(costoBase) {
    return costoBase * porcentajeSeguro;
}

function calcularTotalEnvio(costoBase, seguro) {
    return costoBase + seguro;
}

function mostrarGuiaEnvio(peso, distancia, base, seguro, total) {
    console.log("\n================================");
    console.log("       GUIA DE DESPACHO");
    console.log("================================");
    console.log("Peso del paquete: " + peso + " kg");
    console.log("Distancia: " + distancia + " km");
    console.log("Costo base: $" + base.toFixed(2));
    console.log("Seguro de envio: $" + seguro.toFixed(2));
    console.log("Total del envio: $" + total.toFixed(2));
    console.log("================================");
}

rl.question("Ingrese el peso del paquete en kg: ", function(entradaPeso) {
    const pesoKg = parseFloat(entradaPeso);

    rl.question("Ingrese la distancia en km: ", function(entradaDistancia) {
        const distanciaKm = parseFloat(entradaDistancia);

        if (isNaN(pesoKg) || pesoKg <= 0 ||
            isNaN(distanciaKm) || distanciaKm <= 0) {

            console.log("Error: el peso y la distancia deben ser mayores a cero.");

        } else {
            const costoBase = calcularCostoBase(pesoKg, distanciaKm);
            const seguro = calcularSeguroEnvio(costoBase);
            const total = calcularTotalEnvio(costoBase, seguro);

            mostrarGuiaEnvio(
                pesoKg,
                distanciaKm,
                costoBase,
                seguro,
                total
            );
        }

        rl.close();
    });
});