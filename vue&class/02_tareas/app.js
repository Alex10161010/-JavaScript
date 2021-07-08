Vue.createApp({
	data() {
		return {
			arrTareas: [],
			txtTarea: '',
		};
	},
	methods: {
		btnAddTarea() {
			this.arrTareas.push(this.txtTarea);
			this.txtTarea = '';
		},
	},
}).mount('#app');

/*
mount('#app'): Indica en donde se estará trabajando
btnAddTarea: evento del botón agregar
data(): son las variables globales, necesarias para agregar tareas

*/
