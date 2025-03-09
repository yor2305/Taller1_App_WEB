// Punto 6

const prompt = require(`prompt-sync`)();

var Sumar=0;

while(Sumar < 50){
    const numero = parseInt(prompt('Ingresa el primer número: '));
    Sumar +=numero;
    console.log(`Suma actual: ${Sumar}`);
 }
 console.log('La Suma ha superado el valor de: 50');