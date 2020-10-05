
module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) 
        return false;
     str = str.split('');
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if(str[i] === bracketsConfig[j][0] && str[i + 1] === bracketsConfig[j][1]) {
                str.splice(i, 2);
                i =0;
            }
        }
    }
    return (str.length == 0) ? true : false;
}
