/**
 * Autor: EAMM
 * Fecha creacion: 22/03/2021 11:11 a.m
 * Fecha modificacion: 06/05/2021 11:11 a.m
 */
import alertify from 'alertifyjs';
class Commun {
	constructor() {
		let rutaContacto = './src/contacto/controller/controllercontacto.php';
		alertify.set('notifier', 'position', 'top-right');
	}

	getElement(selector) {
		const element = document.querySelector(selector);
		return element;
	}

	focus(elemento) {
		elemento.focus();
	}

	/* Imprimir Mensaje */
	alerta(resp) {
		if (resp.opc == 1) {
			alertify.success(resp.msj, 8);
		}
		if (resp.opc == 4 || resp.opc == 3 || resp.opc == 2 || resp.opc == 0) {
			alertify.warning(resp.msj, 8);
		}
	}

	retornaURL(nombre) {
		const rutas = [
			{
				nombre: 'usuario',
				url: '../../backend/controller/usuarios.php',
			},
			{
				nombre: 'persona',
				url: '../../backend/controller/personas.php',
			},
			{
				nombre: 'login',
				url: '../app/controller/login.php',
			},
			{
				nombre: 'select',
				url: '../../backend/controller/select.php',
			},
		];
		const { url } = rutas.find((ruta) => ruta.nombre === nombre);
		return url;
	}

	// Establecer en Local Storage
	setLocalStorage(name, data) {
		localStorage.setItem(name, data);
	}
	// Obtener en Local Storage
	getLocalStorage(name) {
		let data = localStorage.getItem(name);
		return data;
	}
	deleteLocalStorage(name) {
		localStorage.removeItem(name);
	}
}

export default Commun;
