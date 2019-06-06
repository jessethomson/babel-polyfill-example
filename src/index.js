console.log('hey!');

async function double(num) {
	return Promise.resolve(num * 2);
}

async function main() {
	const result = await double(4);
	console.log(result);
}

main();
