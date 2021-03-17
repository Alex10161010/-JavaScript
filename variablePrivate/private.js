/**
 *
 */
class Rectangulo {
	/*Atributo privado */
	#area = 0;
	constructor(base, altura) {
		this.base = base;
		this.altura = altura;
	}
	/* SET Y GET */
	set setBase(base) {
		this.base = base;
	}
	get getBase() {
		return this.base;
	}
	get getAltura() {
		return this.altura;
	}
	set setAltura(altura) {
		this.altura = altura;
	}
	/* Metodos */
	calcularArea() {
		this.#area = this.base * this.altura;
		this.printlArea();
	}

	printlArea() {
		console.log('El area del rectangulo es: ', this.#area);
	}
}

const rectagulo = new Rectangulo(10, 15);
rectagulo.calcularArea();
console.log(rectagulo);
