/*
Callbacks
    significa que esta es un funcion se va ejecutar eventualmente en un tiempo determindado
setTimeout(() => {
	console.log('Alejandro');
}, 2000);
*/
const getUsuarioById = (id, callback) => {
	const user = {
		id,
		nombre: 'Alejandro',
	};
	setTimeout(() => {
		callback(user);
	}, 2000);
};

/* Los callbacks no son mas que una funcion que se manda con argumento a otra funcion*/
getUsuarioById(1, ({ id, nombre }) => {
	console.log(id);
	console.log(nombre.toUpperCase());
});
