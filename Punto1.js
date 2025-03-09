// Punto 1

const prompt = require('prompt-sync')();
const CalcularFactura = parseFloat(prompt('Por favor digete el valor de la factura:'));
if (CalcularFactura > 50000){
    const impuestos = CalcularFactura * 0.15;
    const total = CalcularFactura + impuestos;
    console.log(`El valor total de la factura con impuestos es: ${total}`)

}else {
    console.log(`El valor total de la factura sin impuestos es: ${CalcularFactura}`);
}