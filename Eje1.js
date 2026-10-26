import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const tasaEUR = 0.89; 
const tasaJPY = 156.72; 

function convertirUSDToEUR(dolares) {
    return dolares * tasaEUR;
}

function convertirUSDToJPY(dolares) {
    return dolares * tasaJPY;
}

function mostrarTicketDivisas(dolares, euros, yenes) {
    console.log("\n================================");
    console.log("      TICKET DE DIVISAS");
    console.log("================================");
    console.log("Dolares: $" + dolares.toFixed(2));
    console.log("Euros: " + euros.toFixed(2));
    console.log("Yenes japoneses: " + yenes.toFixed(2));
    console.log("================================");
}

rl.question("Ingrese la cantidad en dolares: ", function(entrada) {
    const dolares = parseFloat(entrada);

    if (isNaN(dolares) || dolares < 0) {
        console.log("Error: ingrese una cantidad valida.");
    } else {
        const euros = convertirUSDToEUR(dolares);
        const yenes = convertirUSDToJPY(dolares);

        mostrarTicketDivisas(dolares, euros, yenes);
    }

    rl.close();
});