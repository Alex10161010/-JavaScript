/*
Ejemplo 18:
    Eliminar Elementos Arreglo Mientras se Cumpla una Condición dropRightWhile()
 */
const _ = require('lodash');

let programas = [
	{ nombre: 'Notepad++', instalado: true },
	{ nombre: 'Visual Studio Code', instalado: true },
	{ nombre: 'Eclipse IDE', instalado: false },
	{ nombre: 'MySQL Workbench', instalado: true },
	{ nombre: 'Visual Studio', instalado: false },
];

/* Quedarnos con los programas que si estan instalados y remover los que no estan instalados*/
/* 2° parametro es la condicion se puede establecer como una funcion anonima o una expresion de flecha*/
let respuesta = _.dropRightWhile(programas, (programa) => programa.instalado == false);
//let respuesta = _.dropRightWhile(programas, (programa) => !programa.instalado);
console.log(respuesta);
console.log('');

respuesta = _.dropRightWhile(programas, ['instalado', false]);
console.log(respuesta);
