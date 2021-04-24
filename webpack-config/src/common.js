/**
 *
 */
import alertify from 'alertifyjs';
class Common {
	constructor() {
		let rutaContacto = './src/contacto/controller/controllercontacto.php';
		alertify.set('notifier', 'position', 'top-right');
	}
	/* Imprimir Mensaje */
	alerta(resp) {
		if (resp.opc == 1) {
			alertify.success(resp.msj, 8);
		}
		if (resp.opc == 4 || resp.opc == 3 || resp.opc == 2) {
			alertify.warning(resp.msj, 8);
		}
	}

	getElement(selector) {
		const element = document.querySelector(selector);
		return element;
	}

	focus(elemento) {
		elemento.focus();
	}
}

export default Common;
