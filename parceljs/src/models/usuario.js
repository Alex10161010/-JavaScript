/**
 * Autor: EAMM
 * Fecha creacion: 22/03/2021 11:11 a.m
 * descripcion: Agregar la funcionalidad para usuarios
 */
class Usuarios extends Common {
	constructor(email, pass) {
		super();
		this.email = email;
		this.pass = pass;
	}

	resetForm = () => {
		this.formulario.reset();
	};

	save = () => {};

	getById = (id) => {
		let dataForm = new FormData();
		dataForm.append('email', email);
		dataForm.append('password', password);
	};

	serviceFetch = async (dataForm) => {
		const resp = await fetch(this.URL, {
			method: 'POST',
			body: dataForm,
		});
		const data = await resp.json();
		return data;
	};

	serviceAxios = () => {
		axios({
			url: '',
			method: 'post',
			responseType: 'json',
			data: {},
		});
	};
}
export default Usuarios;
