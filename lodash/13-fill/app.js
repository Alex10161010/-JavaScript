/*
Ejercicio: 20
    Llenar un Arreglo con un Valor Específico a través de la Función fill()
 */

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log();

_.fill(numeros, 0);
console.log(numeros);
console.log();
/*Podemos indicar en que posición queremos que empiece a rellenarse */
/*
    2° parametro es el carater de relleno
    3° parametro es el indice del arreglo en donde empieza
    4° parametro indica el indice final
*/

_.fill(numeros, 99, 1, 3);
console.log(numeros);
