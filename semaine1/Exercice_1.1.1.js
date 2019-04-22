const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const intToFind = Math.floor(Math.random() * 101);
intAnswer = 0;

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function askAnswer() {
	check = rl.question('What do you answer? ', (intAnswer) => {
		if (isNumber(intAnswer) == false) {
			console.log('ERROR. Please indicate a number.');
			askAnswer();
		} else if (intAnswer == intToFind) {
			console.log('Well done! The number was indeed '+intAnswer+'.');
			rl.close();
		} else if (intAnswer > intToFind) {
			if ((intAnswer - intToFind) <= 5)
				console.log('Your answer '+intAnswer+' is a little bit too high. You are very close!');
			else if ((intAnswer - intToFind) <= 10 && (intAnswer - intToFind) >= 6)
				console.log('Your answer '+intAnswer+' is too high but you are close.');
			else
				console.log('Your answer '+intAnswer+' is too high.');
			askAnswer();
		} else {
			if ((intToFind - intAnswer) <= 5)
				console.log('Your answer '+intAnswer+' is a little bit too low. You are very close!');
			else if ((intToFind - intAnswer) <= 10 && (intToFind - intAnswer) >= 6)
				console.log('Your answer '+intAnswer+' is too low but you are close.');
			else
				console.log('Your answer '+intAnswer+' is too low.');
			askAnswer();
		}
	});
}

function findRandomIntGame() {
	console.log('Try to find the number between 1 and 100 ! (answer is '+intToFind+')');
	askAnswer();
}

findRandomIntGame();