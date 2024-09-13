function asyncFunction(callback) {
	setTimeout(() => {
		try {
			let a = 3 + z;
			callback(null, a);
		} catch (error) {
			callback(error);
		}
	}, 1000);
}

asyncFunction((error, result) => {
	if (error) {
		console.log(error, error.message);
		return false;
	} else {
		console.log(result);
		return true;
	}
});

// try {
// 	asyncFunction((error, result) => {
// 		if (error) {
// 			throw (error, error.message); // No va a funcionar
// 		} else {
// 			console.log(result);
// 		}
// 	});
// } catch (error) {
// 	console.log(error, error.message);
// }
