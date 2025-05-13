function isValidString(sequenceOfBrackets) {
  const stackBrackets = []
  const charList = sequenceOfBrackets.split('')

  charList.forEach((bracket) => {
    const lastIndex = stackBrackets.length - 1

    if (bracket === '(') stackBrackets.push(bracket)

    if (bracket === ')') {
      if (stackBrackets[lastIndex] === '(') return stackBrackets.pop()
      stackBrackets.push(bracket)
    }

    if (bracket === '[') stackBrackets.push(bracket)

    if (bracket === ']') {
      if (stackBrackets[lastIndex] === '[') return stackBrackets.pop()
      stackBrackets.push(bracket)
    }

    if (bracket === '{') stackBrackets.push(bracket)

    if (bracket === '}') {
      if (stackBrackets[lastIndex] === '{') return stackBrackets.pop()
      stackBrackets.push(bracket)
    }
  })

  return stackBrackets.length === 0
}

console.log(isValidString('{()}'))
console.log(isValidString("()"))
console.log(isValidString("()[]{}"))
console.log(isValidString("(]"))
console.log(isValidString("([])"))
console.log(isValidString("())"))
console.log(isValidString("())("))
console.log(isValidString("(())"))
console.log(isValidString("()()()"))