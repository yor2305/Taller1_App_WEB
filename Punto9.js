// Punto 9

const prompt = require('prompt-sync')();

var  vehiculo = {
    placa: prompt('Ingrese la placa del vehículo: '),
    color: prompt('Ingrese el color del vehículo: '),
    marca: prompt('Ingrese la marca del vehículo: '),
    modelo: prompt('Ingrese el modelo del vehículo: '),
    kilometraje: parseFloat(prompt('Ingrese el kilometraje del vehículo: ')),
    velocidad: 0,
    encendido: false
};

function prender() {
    if (vehiculo.encendido) {
        console.log('\nEl vehículo ya está encendido.');
    } else {
        vehiculo.encendido = true;
        console.log('\nInformación del vehículo:', vehiculo);
        console.log('... ha sido prendido');
    }
}

function apagar() {
    if (!vehiculo.encendido) {
        console.log('\nEl vehículo ya está apagado o no ha sido encendido.');
    } else {
        console.log('\nCondiciones finales del vehículo:', vehiculo);
        console.log('... ha sido apagado');
        vehiculo.encendido = false;
        vehiculo.velocidad = 0;
    }
}

function acelerar() {
    if (!vehiculo.encendido) {
        console.log('\nNo puede acelerar si el vehículo está apagado.');
    } else if (vehiculo.velocidad >= 100) {
        console.log('\nEl vehículo ha alcanzado la velocidad máxima de 100 km/h.');
    } else {
        vehiculo.velocidad += 10;
        vehiculo.kilometraje += 10;
        console.log(`\nEl vehículo ha acelerado. Velocidad actual: ${vehiculo.velocidad} km/h, Kilometraje: ${vehiculo.kilometraje} km`);
    }
}

function mostrarMenu() {
    console.log('\nMenú de opciones:');
    console.log('a. Prender vehículo');
    console.log('b. Acelerar vehículo');
    console.log('c. Apagar vehículo');
    console.log('d. Salir');
}

var opcion;
do {
    mostrarMenu();
    opcion = prompt('Seleccione una opción: ').toLowerCase();

    switch (opcion) {
        case 'a':
            prender();
            break;
        case 'b':
            acelerar();
            break;
        case 'c':
            apagar();
            break;
        case 'd':
            console.log('Saliendo del programa...');
            break;
        default:
            console.log('Opción no válida, intente de nuevo.');
    }
} while (opcion !== 'd');
mostrarMenu();