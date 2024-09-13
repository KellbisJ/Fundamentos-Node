console.time('All');

let sum = 0;
console.time('for (bucle)');

for (let i = 0; i < 1000000000; i++) {
	sum += i;
}

console.timeEnd('for (bucle)');

let sum2 = 0;
console.time('for (bucle) 2');

for (let i = 0; i < 10000000000; i++) {
	sum2 += i;
}

console.timeEnd('for (bucle) 2');

console.time('asyncFunction');
console.log('asyncFunction starts');
asyncFunction().then(() => {
	console.timeEnd('asyncFunction');
});

console.timeEnd('All');

function asyncFunction() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Termina el proceso asincrono');
			resolve();
		}, 1000);
	});
}
