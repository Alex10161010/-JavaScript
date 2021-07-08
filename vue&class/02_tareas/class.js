const boton = document.querySelector('button');
const input = document.querySelector('input');
const lista = document.querySelector('ul');

boton.addEventListener('click', () => {
	const listaElementos = document.createElement('li');
	const valor = input.value;
	listaElementos.textContent = valor;
	lista.appendChild(listaElementos);
	input.value = '';
});
