/**
 *
 */
class Persona {
	/* Propiedad Estatica
        ---
        La poropiedades estaticas permiten ocupar metodos sin instaciar dicha clase
        ---
        Numero de instacias de mi clase persona inicializadas
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
	#area = 0;

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
	/* Metodos */
	quienSoy() {
		return `soy ${this.nombre} y mi frace favorita es: ${this.frase}`;
	}
}

/**
 * |
 */
class Heroe extends Persona {
	clan = 'Sin clan';
	constructor(nombre, poder, codigo, frase, comida) {
		super(nombre, poder, codigo, frase, comida);
		this.clan = 'Los Avengers';
	}

	/* Metodo */
	quienSoy() {
		console.log(`Soy ${this.nombre} y pertenesco al clan: ${this.clan}`);
		console.log(super.quienSoy());
	}
}

const spiderman = new Heroe(
	'Peter Parker',
	'La mejor reacciona alergica a las picadurs de araña',
	'Spiderman',
	'Come frutas y verduras',
	'El pai de cerez de la tia May'
);

console.log(spiderman);
spiderman.quienSoy();
