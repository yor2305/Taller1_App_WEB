
// Punto 4

const prompt = require('prompt-sync')();


function Menu() {
    console.log("\n--- Menú de Operaciones ---");
    console.log("1: Sumar");
    console.log("2: Restar");
    console.log("3: Multiplicar");
    console.log("4: Dividir");
    console.log("5: Raíz Cuadrada");
    console.log("6: Salir");
}


function calculadora() {
    var opcion;
    do {
        Menu(); 
        opcion = parseInt(prompt("Selecciona una opción del 1-6:")); 

        switch (opcion) {
            case 1:
                const num1 = parseFloat(prompt("Ingresa el primer número:"));
                const num2 = parseFloat(prompt("Ingresa el segundo número:"));
                console.log(`El resultado de la suma es: ${num1 + num2}`);
                break;

            case 2: 
                const num3 = parseFloat(prompt("Ingresa el primer número:"));
                const num4 = parseFloat(prompt("Ingresa el segundo número:"));
                console.log(`El resultado de la resta es: ${num3 - num4}`);
                break;

            case 3: 
                const num5 = parseFloat(prompt("Ingresa el primer número:"));
                const num6 = parseFloat(prompt("Ingresa el segundo número:"));
                console.log(`El resultado de la multiplicación es: ${num5 * num6}`);
                break;

            case 4: 
                const num7 = parseFloat(prompt("Ingresa el primer número:"));
                const num8 = parseFloat(prompt("Ingresa el segundo número:"));
                if (num8 !== 0) {
                    console.log(`El resultado de la división es: ${num7 / num8}`);
                } else {
                    console.log("Error: No se puede dividir entre cero.");
                }
                break;

            case 5: 
                const num9 = parseFloat(prompt("Ingresa un número:"));
                if (num9 >= 0) {
                    console.log(`La raíz cuadrada de ${num9} es: ${Math.sqrt(num9)}`);
                } else {
                    console.log("Error: No se puede calcular la raíz cuadrada de un número negativo.");
                }
                break;

            case 6: 
                console.log("Saliendo del programa...");
                break;

            default:
                console.log("Opción no válida. Por favor, selecciona una opción del 1 al 6.");
        }
    } while (opcion !== 6); 
}
calculadora();