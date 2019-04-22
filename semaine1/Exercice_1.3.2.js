function frequences(s) {
	lettres = {};
	for (var i in s) {
		if (lettres[s[i]] == undefined)
			lettres[s[i]] = 1;
		else
			lettres[s[i]]++;
	}
	return lettres;
}

console.log(frequences('Etre contesté, c’est être constaté'));