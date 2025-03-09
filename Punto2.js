// Punto 2

const prompt = require('prompt-sync')();
const edad =  parseInt(prompt('Por favor ingresa tu edad:'));
if (edad >= 18){
    console.log(`Eres mayor de edad`);

}else{
    console.log(`Eres menor de edad`);
}