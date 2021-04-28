/*
Ejemplo 19:
    Eliminar Elementos Arreglo Mientras se Cumpla una Condición dropWhile()

    Elimina siempre y cuando se cumpla la condicion en caso de que no cumpla se ROMPE EL CICLO
 */
const _ = require('lodash');

let programas = [
	{ nombre: 'Eclipse IDE', instalado: false },
	{ nombre: 'Visual Studio', instalado: false },
	{ nombre: 'Visual Studio Code', instalado: true },
	{ nombre: 'Notepad++', instalado: true },
	{ nombre: 'MySQL Workbench', instalado: true },
];

console.log('Programas TOTALES:', programas.length);
console.log(programas);
console.log('');
/* Quedarnos con los programas que si estan instalados y remover los que no estan instalados*/
/* 2° parametro es la condicion se puede establecer como una funcion anonima o una expresion de flecha*/
let respuesta = _.dropWhile(programas, (p) => p.instalado == false);
console.log('Cantidad de programas instalados:', respuesta.length);
console.log(respuesta);
console.log('');
/*
respuesta = _.dropWhile(programas, ['instalado', false]);
console.log(respuesta);
 */
