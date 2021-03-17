/**
 *
 */
class Persona {
	/* Propiedad Estatica
        ---
        La propiedades estáticas permiten ocupar métodos sin instanciar dicha clase
        ---
        Numero de instancias de mi clase persona inicializadas
     */
	static _conteo = 0;
	/* Metodo estatico */
	static get getConteo() {
		return Persona._conteo;
	}
	/* Metodo estatico */
	static mensaje() {
		console.log('Hola soy un mensaje statico');
	}

	nombre = '';
	poder = '';
	codigo = '';
	frase = '';
	comida = '';

	constructor(nombre, poder, codigo, frase, comida = '') {
		this.nombre = nombre;
		this.poder = poder;
		this.codigo = codigo;
		this.frase = frase;
		this.comida = comida;

		Persona._conteo++;
	}
	/* SET Y GET */
	set setNombre(nombre) {
		this.nombre = nombre;
	}
	get getNombre() {
		return this.nombre;
	}
	get getComida() {
		return this.comida;
	}
	set setComida(comida) {
		this.comida = comida.toUpperCase();
	}
}

const spiderman = new Persona(
	'Peter Parker',
	'La mejor reacciona alergica a las picadurs de araña',
	'Spiderman',
	'Come frutas y verduras'
);
spiderman.setComida = 'El pai de cerez de la tia May';
console.log(spiderman);

const iroman = new Persona('Tony Stark', 'Absurda cantidad de dinero', 'Iroman', 'Yo soy Ironman');

console.log('Numero de Instancias atributo estatico (_conteo): ', Persona._conteo);

console.log('Numero de instaciar Persona: ', Persona.getConteo);
Persona.mensaje();
