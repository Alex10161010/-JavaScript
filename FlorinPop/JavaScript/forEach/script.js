const numeros = [1, 2, 3, 4, 5, 6, 7];
const letras = ['a', 'b', 'c', 'a', 'd', 'a', 'h', 'j'];

let suma = 0;
numeros.forEach((item2) => (suma += item2));
console.log('suma: ' + suma);
console.log('');
console.log('');
/* numeros.forEach((item2, index, arr) => {
	console.log(item2);
	console.log('a[' + index + '] = ' + item2);
	suma += item2;
}); */

let count = {};
letras.forEach((item) => {
	if (count[item]) {
		count[item]++;
	} else {
		count[item] = 1;
	}
});

console.log(count);
