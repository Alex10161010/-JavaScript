/**
 * 	Autor: EAMM
 *	Fecha inicio:  10/02/2021 10:43 a.m
 *	Fecha  Final:
 * 	Descripcion: registra conctatos
 *  Modificacion:
 */
import Common from './common.js';
class Contacto extends Common {
	constructor() {
		super();
		this.nombre = this.getElement('#txtnombre');
		this.correo = this.getElement('#txtcorreo');
		this.telefono = this.getElement('#txttelefono');
		this.asunto = this.getElement('#txtasunto');
		this.mensaje = this.getElement('#txtmensaje');
		this.boton = this.getElement('#btnContacto');

		this.formulario = this.getElement('#formContacto');
		this.validacion = true;

		this.obj = {
			id: null,
			nombre: null,
			correo: null,
			telefono: null,
			asunto: null,
			mensaje: null,
			cveStatus: 1,
			cveSistema: 3,
		};
	}

	showMensaje(msj, opc) {
		let obj = { msj: msj, opc: opc };
		if (obj.opc === 0) {
			this.alerta(obj);
			this.validacion = false;
		}
		if (obj.opc === 1) {
			this.validacion = true;
		}
	}

	validacionFormulario() {
		if (this.nombre.value === '') {
			this.showMensaje('<strong>Advertencia</strong> Tu nombre es importante.', 0);
			this.focus(this.nombre);
		} else if (this.correo.value === '') {
			this.showMensaje('<strong>Advertencia</strong> Es necesario tu correo electrónico.', 0);
			this.focus(this.correo);
		} else if (this.telefono.value === '') {
			this.showMensaje('<strong>Advertencia</strong> Favor de indicar su número telefónico.', 0);
			this.focus(this.telefono);
		} else if (this.mensaje.value === '') {
			this.showMensaje('<strong>Advertencia</strong> Favor de escribir el mensaje.', 0);
			this.focus(this.mensaje);
		} else {
			this.showMensaje('Ok', 1);
			this.obj.nombre = this.nombre.value.trim();
			this.obj.correo = this.correo.value.trim().toLowerCase();
			this.obj.telefono = this.telefono.value.trim();
			this.obj.asunto = this.asunto.value == '' ? '' : this.asunto.value.trim();
			this.obj.mensaje = this.mensaje.value.trim();
		}
		return this.validacion;
	}

	async getFotos() {
		const resp = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
		const fotos = await resp.json();
		return fotos;
	}

	async saveRegistro(obj) {
		let dataForm = new FormData();
		dataForm.append('idcontacto', obj.id);
		dataForm.append('nombre', obj.nombre);
		dataForm.append('email', obj.correo);
		dataForm.append('telefono', obj.telefono);
		dataForm.append('asunto', obj.asunto);
		dataForm.append('mensaje', obj.mensaje);
		dataForm.append('cveStatus', obj.cveStatus);
		dataForm.append('cveSistema', obj.cveSistema);
		dataForm.append('opcion', 'save');
		const data = await this.service(dataForm);
		return data;
	}

	async getAllRegistros() {
		let dataForm = new FormData();
		dataForm.append('opcion', 'getAllRegistros');
		const data = await this.service(dataForm);
		return data;
	}

	async service(dataForm) {
		const resp = await fetch(this.rutaContacto, {
			method: 'POST',
			body: dataForm,
		});
		const data = await resp.json();
		return data;
	}

	resetForm() {
		this.formulario.reset();
	}
}
export default Contacto;
