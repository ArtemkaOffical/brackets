module.exports = function check(str, bracketsConfig) {
    
	let newstr = str.split('');

	for (i = 0; i < newstr.length; i++) {
		for (j = 0; j < bracketsConfig.length; j++) {
			if (newstr[i] === bracketsConfig[j][0] && newstr[i + 1] === bracketsConfig[j][1]) {
				newstr.splice(i, 2);
				i=0;
			}
		}
	}

	return newstr.length === 0?true:false;
    
}
