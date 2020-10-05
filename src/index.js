module.exports = function check(str, bracketsConfig) {
    
let newstr = str.split('');

	for (i = 0; i< str.length; i++) {
		for (j = 0; j < bracketsConfig.length; j++) {
			if (str[i] === bracketsConfig[j][0] && str[i + 1] === bracketsConfig[j][1]) {
				newstr = newstr.join('');
        newstr = newstr.replace(str[i],'');
        newstr = newstr.replace(str[i+1],'');
        i = 0;
			}
		}
	}

	return newstr.length === 0?true:false;
    
}
