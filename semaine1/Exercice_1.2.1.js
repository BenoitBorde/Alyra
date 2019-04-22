// Le nombre d'opération pour calculer le nombre n est n - 1

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function askNumber() {
	rl.question('De quel nombre souhaitez-vous calculer le factoriel ? ', (n) => {
		if (isNumber(n) == false) {
			console.log('ERROR. Veuillez indiquer un nombre.');
			askNumber();
		} else {
			calcFactoriel(n);
			rl.close();
		}
	});
}

function calcFactoriel(n) {
	factoriel = 1;
	for (i = n; i > 0; i--)
		factoriel = factoriel * i;
	console.log('Le factoriel de '+n+' est '+factoriel);
}

askNumber();