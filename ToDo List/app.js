const formulario = document.getElementById('formulario');
const txttarea = document.getElementById('txttare');
const listatareas = document.getElementById('lista-tareas');
const templates = document.getElementById('template').content;
const fragmento = document.createDocumentFragment();

let objTareas = {
	/* 1605991605119: {
		id: 1605991605119,
		texto: 'Tarea 1',
		estado: false,
	},
	1605991706044: {
		id: 1605991706044,
		texto: 'Tarea 2',
		estado: false,
	}, */
};

document.addEventListener('DOMContentLoaded', (e) => {
	if (localStorage.getItem('listaTareasLocal')) {
		objTareas = JSON.parse(localStorage.getItem('listaTareasLocal'));
	}
	pintarTareas();
});

listatareas.addEventListener('click', (e) => {
	btnAcciones(e);
});

/* Evento formulario submit */
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('Procesando formulario.....');

	/* console.log(e.target[0].value); //accediendo al primer elemento del formulario
	console.log(e.target.querySelector('input').value); //accediendo al primer elemento del formulario
    console.log(txttarea.value); */
	setTareas(e);
});

const setTareas = (e) => {
	if (txttarea.value.trim() == '') {
		console.log('Esta vacio');
		return;
	}
	const newObj = {
		id: Date.now(),
		texto: txttarea.value.trim(),
		estado: false,
	};
	objTareas[newObj.id] = newObj;
	formulario.reset();
	txttarea.focus();
	//console.log(objTareas);

	pintarTareas();
};

const pintarTareas = (e) => {
	localStorage.setItem('listaTareasLocal', JSON.stringify(objTareas)); //alamacenar en localsty

	if (Object.values(objTareas).length === 0) {
		listatareas.innerHTML = `<div class="alert alert-dark">Sin tareas pendientes 😍</div>`;
		return;
	}
	vaciarListaTareas();
	Object.values(objTareas).forEach((tarea) => {
		let clone = templates.cloneNode(true);
		clone.querySelector('p').textContent = tarea.texto;
		if (tarea.estado) {
			/* clone.querySelector('.alert').classList.remove('alert-warning');
			clone.querySelector('.alert').classList.add('alert-success'); */
			clone.querySelector('.alert').classList.replace('alert-warning', 'alert-success');
			clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle', 'fa-undo-alt');
			clone.querySelector('p').style.textDecoration = 'line-through';
		}

		clone.querySelectorAll('.fas')[0].dataset.id = tarea.id;
		clone.querySelectorAll('.fas')[1].dataset.id = tarea.id;
		fragmento.appendChild(clone);
	});
	listatareas.appendChild(fragmento);
};

const vaciarListaTareas = () => {
	while (listatareas.firstChild) {
		listatareas.removeChild(listatareas.firstChild);
	}
};

/* Delegacion de eventos */
const btnAcciones = (e) => {
	if (e.target.classList.contains('fa-check-circle')) {
		objTareas[e.target.dataset.id].estado = true;
		pintarTareas();
	}

	if (e.target.classList.contains('fa-minus-circle')) {
		delete objTareas[e.target.dataset.id];
		pintarTareas();
	}

	if (e.target.classList.contains('fa-undo-alt')) {
		objTareas[e.target.dataset.id].estado = false;
		pintarTareas();
	}
	/*  evita la propagación adicional del evento actual */
	e.stopPropagation();
};
