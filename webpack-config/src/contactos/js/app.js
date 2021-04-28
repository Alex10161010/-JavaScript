import Contacto from '../../resources/model/contacto.js';
const contacto = new Contacto();

import 'bootstrap';
import '../../resources/css/app.scss';
import '../img/soporte.jpg';

contacto.boton.addEventListener('click', () => {
	const resp = contacto.validacionFormulario();
	console.log(resp);
});
