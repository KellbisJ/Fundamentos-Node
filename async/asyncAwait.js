let assistantBot = 'assistantBot';
let person1 = 'Juan';

function hello(bot, person) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('(Inicio de la conversacion)');
			console.log(`[${bot}]: hello, bienvenido, como estas?`);
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

			resolve();
		}, 1000);
	});
}

async function main() {
	await hello(assistantBot, person1);
	await talkUser(person1, `Soy ${person1}`);
	await talkAssistant(assistantBot, `Bienvenido ${person1}, como puedo ayudarte?`);
	await talkUser(person1, 'Nada, solo pasaba por aqui');
	await talkUser(person1, 'Ya me voy, gracias por tu amabilidad');
	await talkAssistant(assistantBot, 'A la orden, si tienes alguna duda no dudes en consultarme');
	await goodbye(assistantBot, person1);
	console.log('(fin de la conversacion)');
}

console.log('(Inicio de todo el programa)');

main();

console.log('(Aqui verificamos que el programa se ejecute de manera sincrona)');
