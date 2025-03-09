// Punto 8

const prompt = require('prompt-sync')();

var Per = {
    nombres: prompt('Ingrese nombres: '),
    apellidos: prompt('Ingrese apellidos: '),
    genero: prompt('Ingrese género: '),
    Fnacimiento: prompt('Ingrese fecha de nacimiento (YYYY-MM-DD): '),
    edad: parseInt(prompt('Ingrese edad: ')),
    salario: parseFloat(prompt('Ingrese salario: '))
};

function mostrarMenu() {
    console.log('\nMenú de opciones:');
    console.log('a. Consultar Persona');
    console.log('b. Modificar Persona');
    console.log('c. Aumentar salario');
    console.log('d. Verificar mayoría de edad');
    console.log('e. Salir');
}

var opcion;
do {
    mostrarMenu();
    opcion = prompt('Seleccione una opción: ').toLowerCase();

    switch (opcion) {
        case 'a':
            console.log('\nInformación de la Persona:', Per);
            break;
        case 'b':
            let campo = prompt('Ingrese el campo a modificar (nombres, apellidos, genero, Fnacimiento, edad, salario): ');
            if (Per.hasOwnProperty(campo)) {
                Per[campo] = prompt(`Ingrese nuevo valor para ${campo}: `);
                if (campo === 'edad') Per[campo] = parseInt(Per[campo]);
                if (campo === 'salario') Per[campo] = parseFloat(Per[campo]);
                console.log('Información actualizada con éxito.');
            } else {
                console.log('Campo no válido.');
            }
            break;
        case 'c':
            let aumento = parseFloat(prompt('Ingrese el monto a aumentar en el salario: '));
            Per.salario += aumento;
            console.log(`Nuevo salario: ${Per.salario}`);
            break;
        case 'd':
            console.log(Per.edad >= 18 ? 'La Persona es mayor de edad.' : 'La Persona es menor de edad.');
            break;
        case 'e':
            console.log('Saliendo del programa...');
            break;
        default:
            console.log('Opción no válida, intente de nuevo.');
    }
} while (opcion !== 'e');

mostrarMenu();