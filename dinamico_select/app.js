document.addEventListener('DOMContentLoaded', () => {
	cargarMeses();
});

const cargarMeses = () => {
	const meses = [
		{ valor: 'Enero', id: 1 },
		{ valor: 'Febrero', id: 2 },
		{ valor: 'Marzo', id: 3 },
		{ valor: 'Abril', id: 4 },
		{ valor: 'Mayo', id: 5 },
		{ valor: 'Junio', id: 6 },
		{ valor: 'Julio', id: 7 },
		{ valor: 'Agosto', id: 8 },
		{ valor: 'Septiembre', id: 9 },
		{ valor: 'Octubre', id: 10 },
		{ valor: 'Noviembre', id: 11 },
		{ valor: 'Diciembre', id: 12 },
	];
	const selectMeses = document.getElementById('txtmes'); //Seleccionamos el select
	let option = document.createElement('option');
	option.innerHTML = 'Mes';
	option.value = '';
	selectMeses.appendChild(option);

	meses.forEach((mes) => {
		let option = document.createElement('option'); //Creamos la opcion
		option.innerHTML = mes.valor; //Metemos el texto en la opción
		option.setAttribute('value', mes.id);
		selectMeses.appendChild(option); //Metemos la opción en el select
	});
};
