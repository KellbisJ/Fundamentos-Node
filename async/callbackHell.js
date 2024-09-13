let person1 = 'Juan';

function hello(person, myCallback) {
	setTimeout(() => {
		console.log(`hello ${person}, bienvenido, como estas?`);
		myCallback();
	}, 1000);
}

function talkUser(text, callback) {
	setTimeout(() => {
		console.log(text);
		callback();
	}, 1000);
}

function goodbye(person, myCallback) {
	setTimeout(() => {
		console.log(`goodbye ${person},hasta luego que tengas un feliz dia ☺️`);
		console.log('fin de la conversacion');
		myCallback();
	}, 1000);
}

function chat(person, times, callback) {
	if (times === 0) {
		goodbye(person1, () => {
			console.log(`Termino la funcion asincrona`);
			if (callback) callback();
		});
	} else {
		talkUser('... (siguen conversando)', () => {
			chat(person, times - 1, callback);
		});
	}
}

console.log('Inicio de la funcion asincrona');

hello(person1, () => {
	talkUser('Bien, gracias', () => {
		chat(person1, 4); // ahora podemos determinar cuantas veces se va a repetir la conversacion y de esta manera controlamos los callbacks hell
	});
});

// hello(person1, () => {
// 	talkSystem(() => {
// 		talkUser1(() => {
// 			talkUser2(() => {
// 				talkUser2(() => {
// 					goodbye(person1, () => {
// 						console.log(`Termino la funcion asincrona`);
// 					});
// 				});
// 			});
// 		});
// 	});
// });
