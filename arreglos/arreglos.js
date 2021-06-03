/* Contar la cantidad de palabras que existen en un texto */
const resultado = document.getElementById('resultado');
let texto =
	'El dia de hoy fui a comprar despensa en chedraui que se encuentra enfrentre de la casa despues empece a realizar codificacion de';
let palabras = texto.split(' ');
let numPalabras = palabras.length;
console.log(palabras);
resultado.innerHTML = `numero de palabras: ${numPalabras}`;

console.log(palabras.join('-'));
/* veces se encuentra una palabra dentro de un texto */

/* filtro de palabras */
console.log(filtroPalabras(texto));
palabraslongitud(texto, 5);

function filtroPalabras(str) {
	let marcas = ['codificacion'];
	let palabrasFiltradas = str.split(' ').map((palabra) => {
		return marcas.includes(palabra) ? 'xxx' : palabra;
	});
	console.log(palabrasFiltradas);
	return palabrasFiltradas.join(' ');
}

function palabraslongitud(str, max) {
	let palabrasFiltradas = str.split(' ').map((palabra) => {
		if (palabra.length > max) {
			return palabra;
		} else {
			return false;
		}
	});
	console.log(palabrasFiltradas);
}
