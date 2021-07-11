/* Este es un termino muy comun
    que significa el infierno de los callbacks

*/

const empleados = [
	{
		id: 1,
		nombre: 'Alejandro',
	},
	{
		id: 2,
		nombre: 'Linda',
	},
	{
		id: 3,
		nombre: 'Karen',
	},
];

const salarios = [
	{
		id: 1,
		salario: 5000,
	},
	{
		id: 2,
		salario: 2500,
	},
];

const getEmpleadosById = (id, callback) => {
	const empleado = empleados.find((e) => e.id === id);
	if (empleado) {
		callback(null, empleado);
	} else {
		callback(`Empleado con id ${id} no existe`);
	}
};

const getSalarioById = (id, callback) => {
	const salario = salarios.find((s) => s.id === id);
	if (salario) {
		callback(null, salario);
	} else {
		callback(`El salario del id ${id} no existe`);
	}
};

const id = 5;

getEmpleadosById(id, (error, empleado) => {
	/* El valor null es igual a falso */
	if (error) {
		console.log('Error');
		return console.log(error);
	}
	console.log('Empleado Existe');
	console.log(empleado);
});

getSalarioById(id, (error, salario) => {
	if (error) {
		console.log('Error');
		return console.log(error);
	}
	console.log('Salario Existe');
	console.log(salario);
});
