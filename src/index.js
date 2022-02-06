module.exports =function check(str, bracketsConfig) {
  const objBrackets = {};
  str = str.split('');

  for (let i = 0; i < bracketsConfig.length; i++) {
    objBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  const objValues = Object.values(objBrackets)
  const objKey = Object.keys(objBrackets)
  let stack = [];

  for(let i = 0; i< str.length;i++){
    if (stack[stack.length - 1] === str[i] && objKey.includes(str[i])) { stack.pop() }
    else if (objValues.includes(str[i])) { stack.push(str[i]) }
    else if (stack.length === 0) { return false }
    else if (objBrackets[str[i]] === stack[stack.length - 1]) { stack.pop() }
  }
  return stack.length === 0
}