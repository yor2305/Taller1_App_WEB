
// Punto 5

const prompt = require('prompt-sync')();

const n = parseInt(prompt('Ingresa el valor de n para la serie SerieFibona: '));

let SerieFibona = [0, 1];

for (let i = 2; i < n; i++) {
    SerieFibona[i] = SerieFibona[i - 1] + SerieFibona[i - 2];
}

console.log(`La serie SerieFibona hasta el término ${n} es: ${SerieFibona.join(', ')}`);