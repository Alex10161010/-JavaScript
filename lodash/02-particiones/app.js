/*
Ejecicio 8:
    nombre video: Lodash Ejercicio: 8 Particionar en N Cantidad de Partes (Grupos) un Arreglo con la Función chunk()
    [1, 2, 3, 4, 5, 6, 7]

    n = 2 =>[[1, 2], [3,4], [5,6], [7]]

    n = 3 =>[[1, 2, 3], [4, 5, 6], [7]]

    n = 3 =>[[1, 2, 3, 4], [5, 6, 7]]
 */

const _ = require('lodash');
let numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(numeros);
console.log('cantidad de elementos del arreglo numeros:', numeros.length);
console.log('');

console.log('particiones en 1');
let particiones = _.chunk(numeros);
console.log(particiones);
console.log('');

console.log('particiones en dos');
particiones = _.chunk(numeros, 2);
console.log(particiones);
console.log('');

console.log('particiones en tres');
particiones = _.chunk(numeros, 3);
console.log(particiones);
console.log('');

console.log('particiones en 4');
particiones = _.chunk(numeros, 4);
console.log(particiones);
console.log('');
