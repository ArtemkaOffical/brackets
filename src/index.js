module.exports = function check(str, bracketsConfig) {
    
	let newstr = Array.from(str);

	for (i = 0; i< newstr.length; i++) {
		for (j = 0; j < bracketsConfig.length; j++) {
			if (newstr[j] === bracketsConfig[j][0] && newstr[i + 1] === bracketsConfig[j][1]) {
				newstr.splice(i, 2);
				i -= 2;
			}
		}
	}

	return newstr.length === 0?true:false;
    
}
