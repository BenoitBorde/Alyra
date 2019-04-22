const chaine = 'abc2@';
const chaineDecalage = -1;

function chiffreCesar(s, n) {
	console.log('Chaine d\'origine : '+s);
	cryptedString = '';
	for (var i in s) {
		c = s.charCodeAt(i);
		cryptedString = cryptedString + String.fromCharCode(c+n);
	}
	return cryptedString;
}

console.log('Chaine cryptée avec la clé de décalage '+chaineDecalage+' : '+chiffreCesar(chaine, chaineDecalage));