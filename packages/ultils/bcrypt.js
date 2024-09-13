const bcrypt = require('bcrypt');

const password = '123456!!';

const hash = bcrypt.hashSync(password, 5);

console.log(hash);

const result = bcrypt.compareSync(password, hash);

console.log(result);
