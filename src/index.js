module.exports =
  function check(str, bracketsConfig) {
    const objBrackets = {};
    let stack = [];
    let doubleArr = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][1] === bracketsConfig[i][0]) {
        doubleArr.push(bracketsConfig[i][0]);
      } if (bracketsConfig[i][1] !== bracketsConfig[i][0]) {
        objBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];

      }
    }
    let objValues = Object.values(objBrackets)
    const objKey = Object.keys(objBrackets)

    for (let i = 0; i < str.length; i++) {
      let ad = str[i];
      if (objValues.includes(ad)) {
        stack.push(ad);

      } else if (doubleArr.includes(ad)) {
        stack.push()
      } else {
        if (stack.length === 0) {
          return false;
        }
        let topElement = stack[stack.length - 1]
        if (objBrackets[ad] === topElement) {
          stack.pop()
        }
        if (doubleArr.includes(topElement)) {
          stack.pop()
        }
      }
    } return stack.length === 0
  }

