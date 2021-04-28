/*
    Ejercicio: 16
        Eliminar una Cantidad Arbitraria de Elementos de un Arreglo con Función drop()

    [1, 2, 3, 4, 5, 6, 7]
    n = 3
    [4, 5, 6, 7]

    si el numero de elementos a eliminar es mayor al numero de elementos que contiene el arreglo entonces el resultado seria
    n = 10
    []

    si n = 0
    devulve el mismo arreglo original

 */
const _ = require('lodash');
let numeros = [1, 2, 3, 4, 5, 6, 7];
console.log('numeros', numeros);
console.log('Despues de eliminar 3 elementos');
let resultado = _.drop(numeros, 3);
console.log('resultado', resultado);
console.log('');

console.log('eliminar 1 elemento de arreglo numeros');
console.log('numeros', numeros);
resultado = _.drop(numeros);
console.log('resultado', resultado);
console.log('');
