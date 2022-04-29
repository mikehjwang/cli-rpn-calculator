const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const calc = (operand1, operand2, operator) => {
  if (operator === '+') {
    return operand1 + operand2
  }
  if (operator === '-') {
    return operand1 - operand2
  }
  if (operator === '*') {
    return operand1 * operand2
  }
  if (operator === '/') {
    if (operand2 === 0) {
      return 'div-error'
    }
    return operand1 / operand2
  }
  return 'inp-error'
}

const operands = []
const recursiveAsyncReadLine = () => {
  rl.question('>', command => {
    if (command === 'q') {
      return rl.close()
    }

    const elements = command.split(' ')
    let result
    elements.forEach(item => {
      if (item === '') {
        return
      }
      const val = parseInt(item)
      if (isNaN(val)) {
        if (operands.length < 2) {
          result = 'error'
          console.log('Error: Invalid input')
          return
        }

        const operand2 = operands.pop(),
          operand1 = operands.pop()
        result = calc(operand1, operand2, item)

        if (result === 'inp-error') {
          result = 'error'
          console.log('Error: Invalid input')
          return
        } else if (result === 'div-error') {
          result = 'error'
          console.log('Error: Divied by zero')
          return
        }
      } else {
        result = val
      }
      operands.push(result)
    })
    if (result !== 'error') {
      console.log(result)
    } else {
      return rl.close()
    }

    recursiveAsyncReadLine()
  })
}

recursiveAsyncReadLine()
