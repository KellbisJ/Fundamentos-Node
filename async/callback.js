// function asyncCallback(myCallback) {
// 	setTimeout(() => {
// 		console.log('Finalizando...');
// 		myCallback();
// 	}, 1000);
// }

// console.log('Cargando...');

// asyncCallback(() => {
// 	console.log('Termino la funcion asincrona');
// });
let person1 = 'Juan';

function hello(person, myCallback) {
	setTimeout(() => {
		console.log(`hello ${person}, bienvenido`);
		myCallback();
	}, 1000);
}

function goodbye(person, myCallback) {
	setTimeout(() => {
		console.log(`goodbye ${person},hasta luego que tengas un feliz dia ☺️`);
		myCallback();
	}, 1000);
}

console.log('Inicio de la funcion asincrona');

hello(person1, () => {
	goodbye(person1, () => {
		console.log(`Termino la funcion asincrona`);
	});
});
