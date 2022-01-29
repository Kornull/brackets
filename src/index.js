module.exports =function check(str, bracketsConfig) {
  const objBrackets = {};
  str = str.split('');

  for (let i = 0; i < bracketsConfig.length; i++) {
    objBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  const objValues = Object.values(objBrackets)
  const objKey = Object.keys(objBrackets)
  let stack = [];

  str.forEach((el) => {
    if (stack[stack.length - 1] === el && objKey.includes(el)) { stack.pop() }
    else if (objValues.includes(el)) { stack.push(el) }
    else if (stack.length === 0) { return false }
    else if (objBrackets[el] === stack[stack.length - 1]) { stack.pop() }
  })
  return stack.length === 0
}