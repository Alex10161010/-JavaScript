/* var animales = [
	{ especie: 'Leon', nombre: 'Rey' },
	{ especie: 'Cerdo', nombre: 'Cerdito' },
	{ especie: 'Whale', nombre: 'Fail' },
];

for (var i = 0; i < animales.length; i++) {
	(function (i) {
		this.imprimir = function () {
			console.log('#' + i + ' ' + this.especie + ': ' + this.nombre);
		};
		this.imprimir();
	}.call(animales[i], i));
} */

/* Codigo Facilito*/
/* Asignar el valor de la variable this tambien conocida como el contexto  estos metodos son
    call
    Apply
    Bind

    CLASIFICACION
        *Ejecutan funcion de manera inmediata      || ya que estos asignan el valor de this
            -- call
            -- apply: Los argumentos que se envíen se mandan en un arreglo
        *y los que contruyen una funcion que puede ejecutarse despues
            -- Bind: genera una nueva función que se le manda al ejecutar()

    Nota: las funciones de flecha no reasignan el contexto (this)

    Una de la mejor es dejar que el ejecutar siga sin modificaciones y hacer cambios en el llamado del metodo
*/
function ejecutar(funcion) {
	funcion();
}

/* Objecto tutor  */
let tutor = {
	nombre: 'Alex',
	apellido: 'MOME',
	nombreCompleto: function () {
		console.log(this.nombre + ' ' + this.apellido);
	},
};

function saludar(nombre) {
	console.log('Hola ', nombre);
}

ejecutar(tutor.nombreCompleto.bind(tutor));
/* window: este es el contexto global */
/* saludar.call(window, 'Emmanuel Morales'); */
