
module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) 
        return false;
     str = str.split('');
    for ( i = 0; i < str.length; i++) {
        for (j = 0; j < bracketsConfig.length; j++) {
            if(str[i] === bracketsConfig[j][0] && str[i + 1] === bracketsConfig[j][1]) {
                str.splice(i, 2);
                i -=2;
            }
        }
    }
    return (arr.length == 0) ? true : false;
}
