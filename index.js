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
