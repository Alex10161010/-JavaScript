/**
 * Autor: EAMM
 * Fecha creacion: 22/03/2021 11:11 a.m
 * descripcion: Agregar la funcionalidad para login
 */
import Common from './commun.js';
class Login extends Common {
	constructor() {
		super();
		this.email = this.getElement('#txtcorreo');
		this.password = this.getElement('#txtpassword');
		this.btnLogin = this.getElement('#btnIniciarSession');
		this.formulario = this.getElement('#formularioLogin');
		this.URL = this.retornaURL('login');
		this.divmensaje = this.getElement('#divmensaje');
		this.parmensaje = this.getElement('#parmensaje');
		this.validacion = true;

		this.objLogin = { email: null, password: null };
	}

	// Check email is valid
	checkEmail() {
		let valido = false;
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (re.test(this.email.value.trim())) {
			valido = true;
		}
		return valido;
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
		if (this.email.value === '') {
			this.showMensaje('<strong>Advertencia</strong> ingrese su correo electrónico.', 0);
			this.focus(this.email);
		} else if (!this.checkEmail()) {
			this.showMensaje('<strong>Advertencia</strong> el email es invalido', 0);
			this.focus(this.email);
		} else if (this.password.value === '') {
			this.showMensaje('<strong>Advertencia</strong> ingrese su contraseña.', 0);
			this.focus(this.password);
		} else {
			this.showMensaje('Ok', 1);
			this.objLogin.email = this.email.value.trim();
			this.objLogin.password = this.password.value.trim();
		}
		return this.validacion;
	}

	async iniciarLogin() {
		let dataForm = new FormData();
		dataForm.append('opcion', 'login');
		dataForm.append('correo', this.objLogin.email);
		dataForm.append('password', this.objLogin.password);
		const data = await this.service(dataForm);
		return data;
	}

	async service(dataForm) {
		const resp = await fetch(this.URL, {
			method: 'POST',
			body: dataForm,
		});
		const data = await resp.json();
		return data;
	}

	resetFormulario() {
		this.formulario.reset();
	}
}
export default Login;
