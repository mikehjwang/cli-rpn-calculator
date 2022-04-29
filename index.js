const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const calc = (firstTerm, secondTerm, opt) => {
  if (opt === '+') {
    return firstTerm + secondTerm
  }
  if (opt === '-') {
    return firstTerm - secondTerm
  }
  if (opt === '*') {
    return firstTerm * secondTerm
  }
  if (opt === '/') {
    if (secondTerm === 0) {
      return 'div-error'
    }
    return firstTerm / secondTerm
  }
  return 'inp-error'
}
