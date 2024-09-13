console.log('Hello World');

let i = 0;

setInterval(() => {
	console.log(i);
	i++;
	if (i === 5) {
		i = aba;
	}
}, 1000);
// Hay que tener cuidado con los errores, cuando se usa setInterval que es un hilo (monohilo), porque se detiene el hilo y todo el proceso.
