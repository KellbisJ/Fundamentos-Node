// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1, 2, 3, 9]);
// let buffer = Buffer.from('Hola mundo');

// console.log(buffer);

// console.log(buffer.toString());

// - -
let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
	abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString().toUpperCase());
