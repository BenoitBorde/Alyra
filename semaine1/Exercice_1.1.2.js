const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function askAnswer() {
	check = rl.question('Please enter a number between 1 and 100. I will try to find it! ', (intAnswer) => {
		if (intAnswer < 1 || intAnswer > 100) {
			console.log('ERROR. Your number is out of range!');
			askAnswer();
		} else {
			findAnsweredIntGame(intAnswer);
			rl.close();
		}
	});
}

function findAnsweredIntGame(intToFind) {
	console.log('Number to find '+intToFind);
	check = false;
	intMin = 0;
	intMax = 101;
	intAnswer = Math.floor(Math.random() * 101);
	while (!check) {
		if (intToFind == intAnswer) {
			console.log('Your number is '+intToFind);
			break;
		}
		if (intToFind < intAnswer)
			intMax = (intAnswer-1);
		if (intToFind > intAnswer)
			intMin = (intAnswer+1);
		while (intAnswer < intMin || intAnswer > intMax)
			intAnswer = Math.floor(Math.random() * 101);
		console.log('Try '+intAnswer);
	}
}

askAnswer();