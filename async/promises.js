let assistantBot = 'assistantBot';
let person1 = 'Juan';

function hello(bot, person) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`[${bot}]: hello ${person}, bienvenido, como estas?`);
			resolve();
		}, 1000);
	});
}

function talkUser(person, text) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`[${person}]: ${text}`);
			resolve();
		}, 1000);
	});
}

function talkAssistant(bot, text) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`[${bot}]: ${text}`);
			resolve();
		}, 1000);
	});
}

function goodbye(bot, person) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`[${bot}]: goodbye ${person},hasta luego que tengas un feliz dia ☺️`);
			console.log('fin de la conversacion');
			resolve();
		}, 1000);
	});
}
console.log('Inicio de la funcion asincrona');
hello(assistantBot, person1)
	.then(() => talkUser(person1, 'Bien, gracias'))
	.then(() => talkAssistant(assistantBot, 'Eso me alegra'))
	.then(() => talkAssistant(assistantBot, 'En que puedo ayudarte?'))
	.then(() => talkUser(person1, 'Solamente pasaba por aqui, gracias, ya me voy'))
	.then(() => goodbye(assistantBot, person1))
	.catch((err) => console.log(err));
