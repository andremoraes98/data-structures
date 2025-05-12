// https://leetcode.com/problems/simplify-path/description/

function simplifyPath(path) {
  const canonicalPath = []
  const splittedPaths = path.split('/')
  
  splittedPaths.forEach((charPath) => {
    const isSamePath = charPath === '.'
    const isInvalidValue = charPath === ''
    const isInvalidPath = charPath === '..' && canonicalPath.length === 0

    const shouldRemainsTheSame = isSamePath || isInvalidValue || isInvalidPath

    if (shouldRemainsTheSame) return

    if (charPath === '..') return canonicalPath.pop()

    canonicalPath.push(charPath)
  })

  return `/${canonicalPath.join('/')}`
}

console.log(simplifyPath('/.././home/test/..'))
console.log(simplifyPath('/home/../../tmp//./'))
console.log(simplifyPath('/home//tmp'))
