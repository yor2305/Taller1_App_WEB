// Punto 7

const prompt = require('prompt-sync')();

var suma = 0;
var mayor, menor;

for (var i = 0; i < 10; i++) {
    var num = parseFloat(prompt(`Por favor ingresa el valor ${i + 1}: `));
    suma += num;
    
    if (i === 0) {
        mayor = menor = num;
    } else {
        if (num > mayor) mayor = num;
        if (num < menor) menor = num;
    }
}

var Pro = suma / 10;

console.log(`Suma total: ${suma}`);
console.log(`Valor mayor: ${mayor}`);
console.log(`Valor menor: ${menor}`);
console.log(`Pro: ${Pro}`);