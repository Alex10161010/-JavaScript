/**
 * Crear una nueva instancia por medio de un objecto.
 *
 */
class Persona {
	/*Atributo  */

	static instanciaObjecto({ nombre, apellido, pais }) {
		return new Persona(nombre, apellido, pais);
	}

	constructor(nombre, apellido, pais) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.pais = pais;
	}

	getInformacion() {
		console.log(`informacion: ${this.nombre}, ${this.apellido}, ${this.pais}`);
	}
}

const objPersona = {
	nombre: 'Alex',
	apellido: 'MOME',
	pais: 'Mexico',
};

const persona1 = new Persona('Melissa', 'Flores', 'Honduras');
const persona2 = Persona.instanciaObjecto(objPersona);

persona1.getInformacion();
persona2.getInformacion();
