const imgCargando = document.querySelectorAll('.cargando');

// wait "millis" ms, then resolve with "value"
function resolve(value, milliseconds) {
	return new Promise((resolve) => setTimeout(() => resolve(value), milliseconds));
}

// wait "millis" ms, then reject with "reason"
function reject(reason, milliseconds) {
	return new Promise((_, reject) => setTimeout(() => reject(reason), milliseconds));
}

Promise.all([resolve(1, 5000), resolve(2, 6000), resolve(3, 6000)])
	.then((values) => {
		imgCargando[0].style.display = 'none';
		console.log(values);
	})
	.catch((reason) => console.log(reason)); // outputs "Error!" after 6 seconds.
