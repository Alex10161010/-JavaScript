/**
 * Un Singlenton
 * Es una única instancia de mi clase que no importe cuantas instancias tenga siempre me regrese la única instancia de mi clase
 * esto se ocupa mucho cuando se quiere compartir información a lo largo de la aplicación y base de datos.
 */
class PersonaService {
	/*Atributo  */
	static instancia; // undefined;
	nombre = '';

	constructor(nombre = '') {
		/* Si ya existe una instancia devuelve la instancia */
		if (!!PersonaService.instancia) {
			return PersonaService.instancia;
		}
		/* Si no existe crea la instancia */
		PersonaService.instancia = this;
		this.nombre = nombre;
	}

	printlArea() {
		console.log('El area del rectangulo es: ');
	}
}

const persona1 = new PersonaService('Iroman');
const persona2 = new PersonaService('Spiderman');

console.log('Nombre en la instancia de persona 1 es: ', persona1.nombre);
console.log('Nombre en la instancia de persona 2 es: ', persona2.nombre);

/*

	Nombre en la instancia de persona 1 es:  Iroman
	Nombre en la instancia de persona 2 es:  Iroman

	Esto puede ayuda, ha ahorrar memoria ya que toda estas instancias apuntan exactamente al mismo espacio de memoria del objecto
*/
