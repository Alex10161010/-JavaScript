/*
Ejecicio 11:
    Lodash Ejercicio: 11  Crear un arreglo nuevo a partir de la concatenacion de arreglos o valores con la Función concat()
    la funcion crea un nuevo arreglo no modifica el arreglo original
 */

const _ = require('lodash');

let primos = [2];
console.log('Cantidad de elementos del arreglo primos:', primos.length);
console.log(primos);
console.log('');

// 1° agumento: arreglo original
// 2° agumento: es un argumento variable y se refiere a la cantidad

let variosPrimos = _.concat(primos, -3, 5, 11, [37, 41], [59], [[61, 67, 71]]);
console.log('Cantidad de elementos del nuevo arreglo variosPrimos:', variosPrimos.length);
console.log(variosPrimos);
console.log('');
