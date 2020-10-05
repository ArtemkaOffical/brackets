module.exports = function check(str, bracketsConfig) {
  for(i=0;i<str.length;i++)
  {
      for(j=0;j<bracketsConfig.length;j++)
      {
          if(str[i] === bracketsConfig[j][0] && str[i+1] === bracketsConfig[j][1])
          {
              str.splice(i,2);
              i = 0;
          }
      }
  }
    return str.length===0?true:false;
}
